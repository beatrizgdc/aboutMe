// Arquivo principal para inicializar o servidor Express
require('dotenv').config(); 

const express = require('express');
const db = require('./config/db'); 

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


