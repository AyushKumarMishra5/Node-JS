const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello namaste I am ku!')
})
app.get('/about', (req, res) => {
  res.send('This is express framework for node js!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://loccalhost:${port}`)
});