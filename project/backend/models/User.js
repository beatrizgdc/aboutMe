// Definição de esquemas do MongoDB (ou outro ORM)
// Modelo do usuário


//teste para ver se ta conectando BD
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model('User', userSchema);
module.exports = User;
