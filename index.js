const express = require('express')
const app = express()
const PORT = 3000
const conn = require('./db/conn')
const exphbs = require('express-handlebars')
const Task = require('./models/Task')
const tasksRoutes = require('./routes/tasksRoutes')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

app.use(express.static('public'))

// ---- ROTAS ----
app.use('/tasks', tasksRoutes);

conn
.sync()
.then(() => {
    app.listen(PORT)
})
.catch((err) => {console.log(err)})