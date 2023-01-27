require('dotenv').config(); 
const PORT = process.env.PORT || 3000
const express = require('express');
const cors = require('cors');

const tarefa = require('../back/src/routes/tarefa_Routes');

const app = express()
    .use(express.json())
    .use(cors())
    .use('/tarefa', tarefa)

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});