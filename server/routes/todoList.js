const express = require('express')
const router = express.Router()
const path = require('path')

const ToDoList = require(path.join(__dirname, '../controllers/todoList.js'))

router.post('/create', ToDoList.Create)
router.get('/all', ToDoList.GetAll)
router.get('/one', ToDoList.GetById)
router.put('/update', ToDoList.Update)
router.delete('/delete', ToDoList.Delete)

module.exports = router
