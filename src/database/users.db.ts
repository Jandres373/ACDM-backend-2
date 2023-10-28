import { Sequelize } from 'sequelize-typescript';
import {dbDatabase, dbHost, dbPassword, dbPort, dbUser} from '../config/dotenv.config.ts'

export const sequelize = new Sequelize({
  dialect: 'postgres',
  database: dbDatabase,
  username: dbUser,
  password: dbPassword,
  host: dbHost,
  port: 5432,
  dialectOptions: {
    ssl: { require: true, rejectUnauthorized: false },
  },
});

// Manejo de errores
sequelize.authenticate()
  .then(() => {
    console.log('Connection to DB has been successful');
  })
  .catch((err) => {
    console.error('Error connecting to the DB', err);
  });


