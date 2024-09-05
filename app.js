const express = require('express')
const app = express()
const port = process.env.PORT || 3000 // Default to port 3000 if not defined

const data = {
  name: 'John Doe',
  age: 25,
}

app.get('/data', (req, res) => {
  res.json(data)

})
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})