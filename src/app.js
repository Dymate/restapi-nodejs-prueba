import express from 'express'; //Importo paquete Express
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js';

const app = express(); //Guardo variable en app

app.use(express.json());


app.use('/api', indexRoutes);
app.use('/api', employeesRoutes);

app.use((req, res, next) => { //Si no encuentra enpoint o se copia incorrecto
    res.status(404).json({
        message: 'endpoint not found'
    })
})

export default app;