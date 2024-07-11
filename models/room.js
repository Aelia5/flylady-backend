const mongoose = require('mongoose');
const taskSchema = require('task');

const roomSchema= new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [2, 'Минимальное число символов: 2'],
    maxlength: [30, 'Максимальное число символов: 30']
  },
  tasks: [taskSchema]
})

module.exports = mongoose.model('room', roomSchema);
