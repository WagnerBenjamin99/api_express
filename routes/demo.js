const { Router } = require('express');
const { getPeliculas, getEstrenos, getActores, getOrigenNombre, getImagesNasa, getJokeApi } = require('../controllers/demo');

const routes = Router()

routes.get('/peliculas', getPeliculas);
routes.get('/estrenos', getEstrenos);
routes.get('/actores', getActores);
routes.get('/nationalize/:name', getOrigenNombre);
routes.get('/joke', getJokeApi);

module.exports = routes;
