const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
* METODOS HTTP
*
* GET: Buscar informação no backend
* POST: Criar uma informação no backend
* PUT: Alterar uma informação no backend
* DELETE: Deletar uma informação no backend
*/

/* 
* TIPOS DE PARAMETROS
*
* Query Params: Parametros nomeados enviados na rota após "?"(filtros, paginação)
* Route Params: Parametros utilizados para identificar recursos
* Request BOdy: Corpo da requisição, utilizado para criar ou alterar recursos
*/



app.listen(3333);