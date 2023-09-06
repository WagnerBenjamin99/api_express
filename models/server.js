const express = require('express')

class Server{
    
    constructor(){
        this.port = process.env.PORT || 5000
        this.app = express()
        //primero en llamar
        this.middleware()
        //segundo en llamar
        this.routers()
        
    }
    

    routers(){
        this.app.get('/', (req, res) => {
            res.send('Hello World!')
          })
        //v1 se pone por si actualizamos a una v2 pero la v1 sigue con vida (NO ES OBLIGATORIO)
          this.app.use('/api/v1/demo', require('../routes/demo'))
          
    }

    middleware(){
        this.app.use(express.static('public'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando en el puerto ${this.port}`)
          })
    }
}


module.exports = Server

