import express, { json } from 'express';
import items from './items';

const app = express()

app.use(json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/items', (req, res) => {
    res.json({ items: items })
})
app.listen(3010, () => {
    console.log('server is running')
})