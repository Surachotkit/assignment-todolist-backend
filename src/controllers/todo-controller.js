// const mysql = require('mysql');
const pool = require('../util/database/connection')

exports.getTodo = async(req,res,next) => {
    try {
        const result = await pool.query('select * from list')
        console.log(result[0])
        res.status(200).json(result[0])
    } catch (error) {
        next(error)
    
    }

}

exports.postTodo = async(req,res,next) => {
    const  data  = req.body

    try {
        await pool.query('insert into list set ?', data)
        res.status(200).json({message: "Post Success"})
 
    } catch (error) {
        next(error)
    
    }
    
    
}

exports.editTodo = async(req,res,next) => {
    const  id  = req.params.id
    const { title } = req.body
    // const date = new Date()
    // console.log("🚀 ~ file: todo-controller.js:35 ~ exports.editTodo=async ~ date:", date)

    try {
        const result = await pool.query('UPDATE list SET title = ? WHERE id = ?', [title, id]);
        console.log("🚀 ~ file: todo-controller.js:11 ~ exports.postTodo=async ~ result:", result[0])
        res.status(200).json({message: "update success"})
    // update time 
    } catch (error) {
        next(error)
    
    }
    
}

exports.deleteTodo = async(req,res,next) => {
    const  id  = req.params.id

    try {
        await pool.query(`DELETE from list where id = ${id}`)
        res.status(200).json({message: "delete success"})
    // update time 
    } catch (error) {
        next(error)
    
    }
    
}