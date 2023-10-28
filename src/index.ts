import app from './app'
import { dbPort } from './config/dotenv.config'
import { sequelize } from './database/users.db';
import { users_tb } from './models/users.model';


const initiation = async function () {
  try {
    sequelize.addModels([users_tb]); 
    await sequelize.sync()
    app.listen(dbPort)
    console.log(`Connected to port ${dbPort}`)
  } catch (error) {
    console.log(error)
  }
}

initiation();