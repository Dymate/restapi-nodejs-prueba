import { createPool } from 'mysql2/promise' //import mysql2 para coneccion
import {
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE
} from './config.js'


export const pool = createPool({ //Configuro conección y exporto
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
});