import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt'
import User from '../models/User'
module.exports = (passport) => {
  let options = {}
  options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
  options.secretOrKey = process.env.JWT_SECRET.trim()
  passport.use(
    new JwtStrategy(options, async (payload, done) => {
      console.log(payload)

      const user = await User.findOne({ where: { id: payload.userId } })
      if (user) {
        const customUser = {
          userId: user.id,
          email: user.email
        }
        return done(null, customUser)
      } else return done(null, false)
    })
  )
}
