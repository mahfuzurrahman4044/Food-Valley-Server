const express = require('express')
const app = express()
const cors = require('cors');
const port = 3000

const chef=require("./data/chefInfo.json")

app.use(cors());

app.get('/', (req, res) => {
  res.send('Food Village')
})

app.get('/chef', (req, res) => {
  res.send(chef);
})

app.get('/chef/:id', (req, res) => {
  const id = req.params.id;
  const selectedRecipe = chef.find(r => r.id == id);
  res.send(selectedRecipe)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
