const express = require('express')
const app = express()
const port = 3000

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    const buah = [
        { name: 'Apel' },
        { name: 'Melon' },
        { name: 'Mangga' }
    ]
    res.render('index', {
        name: 'Setiawan',
        umur: 22,
        buah: buah
    })
})
app.get('/:name', (req, res) => res.send(`Nama saya : ${req.params.name}`))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))