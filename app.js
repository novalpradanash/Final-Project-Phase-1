const express = require('express');
const app = express()

const PORT = 3000;

const indexRoutes = require('./routes/index.js')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))


app.use('/', indexRoutes)

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})