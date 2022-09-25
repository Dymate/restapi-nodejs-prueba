 import { pool } from '../db.js';

 export const getEmployees = async(req, res) => { //Traer todos los empleados en
     try {
         const [rows] = await pool.query('SELECT * FROM employee')
         res.json(rows)

     } catch (err) {
         res.status(500).json({
             message: 'some error'
         })
     }
 };

 export const getEmployee = async(req, res) => { //Traer un solo empleado
     try {
         const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])
         if (rows.length <= 0) {
             res.status(404).json({ //Si no encuentra empleado, manda 400 con el mensaje json
                 message: 'Employees not found'
             })
         }
         res.json(rows[0])
     } catch (err) {
         return res.status(500).json({
             message: 'something error'
         })
     }
 }

 export const createEmployees = async(req, res) => { //Crrar Empleado
     const { name, salary } = req.body
     try {
         const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary])
         res.send({
             id: rows.insertId,
             name,
             salary
         })
     } catch (err) {
         return res.status(500).json({
             message: 'Something error'
         })
     }
 }

 export const deleteEmployees = async(req, res) => {
     try {
         const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id]);

         if (result.affectedRows <= 0) {
             res.status(404).json({
                 message: 'employee not found'
             })
         }
         res.sendStatus(204)
     } catch (err) {
         return res.status(500).json({
             message: 'something error'
         })
     }
 }


 export const updateEmployees = async(req, res) => {

     const { id } = req.params
     const { name, salary } = req.body

     try {

         const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id])
         if (result.affectedRows === 0) {
             return res.status(404).json({
                 message: 'employee not found'
             })
         }
         const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])
         res.json(rows[0])

     } catch (err) {
         res.status(500).json({
             message: 'something error'
         })
     }
 }