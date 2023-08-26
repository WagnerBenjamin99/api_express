const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/saludo/:name', (req, res) => {
  res.send('Hola '  + req.params.name)
})

app.listen(process.env.port, () => {
  console.log('Escuchando en el puerto 3000')
})



/* CALLBACK
function inf(param){
  console.log(param)
}
function sup(callback){
  const user = {name: 'tata', apellido:'bsisbuis'}
  callback(user)
}

sup(inf)
*/