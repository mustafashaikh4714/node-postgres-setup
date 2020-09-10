import { DataTypes, Sequelize } from 'sequelize'
import sequelize from '../config/database'
const User = sequelize.define(
  'user',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }
  // { freezeTableName: true }
)

sequelize
  .sync()
  .then(() => console.log('tables created'))
  .catch((err) => console.log(err))

export default User
