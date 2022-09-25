import app from './app.js'
import { PORT } from './config.js'

app.listen(PORT); //Asigno puerto
console.log('Server listening on port ', PORT);