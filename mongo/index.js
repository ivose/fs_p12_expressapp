const mongoose = require('mongoose')
const Todo = require('./models/Todo')
const { MONGO_URL2 } = require('../util/config')

if (MONGO_URL2 && !mongoose.connection.readyState) mongoose.connect(MONGO_URL2, { useNewUrlParser: true, useUnifiedTopology: true })


module.exports = {
  Todo
}
