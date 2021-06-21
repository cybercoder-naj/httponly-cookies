const express = require('express'),
    cookieParser = require('cookie-parser'),
    cors = require('cors')

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: '*',
    credentials: true
}))

app.get('/', (req, res, next) => {
    res.send('<h1>Welcome</h1>')
})

app.get('/jwt', (req, res, next) => {
    res.cookie('jwt', '1234', {
        httpOnly: true,
        secure: true
    })
    res.status(200).json({
        message: 'Cookie sent successfully'
    })
})

app.post('/jwt', (req, res, next) => {
    console.log(req.headers)
    console.log(req.body)
    console.log(req.headers.authorization)
    console.log(req.headers.cookie)
    res.json({message: 'Look at console'})
})

app.listen(3000, () => console.log('listening for requests'))