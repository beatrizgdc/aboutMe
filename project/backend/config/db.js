// Conexão com o MongoDB ou outro banco
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

.then(() => {
    console.log('Conectado ao MongoDB');
    
    // teste
    const User = require('../models/User'); // Importa o User
    const testUser = new User({ name: 'Teste', email: 'teste@example.com' });
    return testUser.save(); // Salva o usuário no banco
  })

  .then(() => console.log('Usuário de teste salvo com sucesso!'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

module.exports = mongoose;

