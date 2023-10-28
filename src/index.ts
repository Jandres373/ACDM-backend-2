import app from './app.ts'
import { dbPort } from './config/dotenv.config.ts'
import { sequelize } from './database/users.db.ts';
import { users_tb } from './models/users.model.ts';


const initiation = async function () {
  try {
    sequelize.addModels([users_tb]); 
    await sequelize.sync()
    app.listen(dbPort)
    console.log(`Connected`)
  } catch (error) {
    console.log(error)
  }
}

initiation();