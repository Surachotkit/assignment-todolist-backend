const express = require('express')
const todoController = require('../controllers/todo-controller')

const router = express.Router();


router.get('/get', todoController.getTodo)
router.post('/create', todoController.postTodo)
router.patch('/edit/:id', todoController.editTodo)
router.delete('/delete/:id', todoController.deleteTodo)

module.exports = router