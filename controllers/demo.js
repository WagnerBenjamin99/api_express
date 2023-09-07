const axios = require('axios');
const { request, response} = require('express');
const res = require('express/lib/response');

const getPeliculas = (req = request, res = response) => {  
    const { anio, ...resto } = req.query;
    console.log(req.query);
    console.log(resto);
    res.status(401).json({name: `Peliculas del año ${anio}`});
}

const getPelicula = (req = request, res = response) => {  
    const {id} = req.params;
    console.log(id);
    res.json({name: `Pelicula con ID: ${id}`});
}


const getEstrenos = (req = request, res = response) => {
    res.json({name: 'Estrenos'});
}

const getActores = (req = request, res = response) => {
    res.json({name: 'Actores'});
}

const getOrigenNombre = (req = request, res = response) => {
    console.log(req.params);
    const { name } = req.params;

    axios.get(`https://api.nationalize.io/?name=${name}`)
        .then(({ status, data, statusText }) => {
            // handle success     
            res.status(200).json({
                status,
                data,
                statusText,
                name
            });
        })
        .catch((error)=>{
            // handle error
            res.status(400).json({
                status:400,
                msg: 'Error inesperado'
            });
        });        

    
}

const getJokeApi = (req = request, res = response) => {
    axios.get('https://v2.jokeapi.dev/joke/Any?lang=es')
        .then(({ data }) => {
            // handle success     
            res.status(200).json({
                data
            });
        })
        .catch((error)=>{
            // handle error
            console.log(error)
            res.status(400).json({
                status:400,
                msg: 'Error inesperado'
            });
        }); 
}


module.exports = {
    getPeliculas,
    getEstrenos,
    getActores,
    getPelicula,
    getOrigenNombre, 
    getJokeApi
};