/* La app es la que ejecutará express. se importa express y se importan las rutas que se usaran desde express */

import express from 'express'
import router from './routes/users.routes'

const app = express()

// Middleware
app.use(express.json())

// Ejecution
app.use(router)

export default app