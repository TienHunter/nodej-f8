const express = require('express')
const path = require('path')
const app = express()
const exphbs = require('express-handlebars');
const morgan = require('morgan')

const port = 3000

const route = require('./routes')


//static file
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.engine('hbs', exphbs({
    extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
app.use(morgan('combined'));

//routes init
route(app);



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})