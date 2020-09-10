const Sequelize = require('sequelize')
const { DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD } = process.env
const sequelize = new Sequelize(
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASSWORD,
  {
    host: 'localhost',
    dialect: 'postgres'
  }
)

sequelize
  .authenticate()
  .then(() => console.log('Database Connected!'))
  .catch((err) => console.log(err))

export default sequelize
