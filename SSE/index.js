const { setInterval } = require('timers/promises')

const app = require('express') ()

app.get('/', (req, res) => {
    res.send('hello')
})

app.get('/stream', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream')
    sendStream(res)
})

function sendStream(res) {
    setInterval(() => {
        res.write('data: ' + 'hello mother F***\n\n')
        res.write('data: ' + 'hello, sorry for what I said before! \n\n')
    }, 5000)
}

app.listen(8000, () => console.log('server running..'))