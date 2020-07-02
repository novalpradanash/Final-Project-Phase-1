const express = require('express');
const app = express()
const session = require('express-session')

const PORT = 3000;
const serveStatic = require('serve-static')
const indexRoutes = require('./routes/index.js')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))

app.use(express.static('assets'))

app.use(session({
    secret: 'cdaaptnia',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 30000
    }

}))

app.use('/', indexRoutes)




app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})