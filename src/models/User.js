const { Schema, model } = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new Schema({
  name: {type: String, require: true},
  email: {type: String, require: true},
  password:{type: String, require: true}
},
{
  timestamps: true
})

UserSchema.methods.encrypPassword = async pass => {
  /* Esta función permite encriptar la contraseña del usuario */

  /* Se hace uso de bcrypt para generar un 'salt' de cifrado */
  const salt = await bcrypt.genSalt(10)

  /* Luego se crea el cifrado y se retorna */
  return await bcrypt.hash(pass, salt)
}

UserSchema.methods.matchPassword = async function(pass){
  /* Esta función permite comprar una contraseña con la encriptada */

  /* Retorna true o false de acuerdo a la comparación */
  return await bcrypt.compare(pass, this.password)
}

module.exports = model( 'User', UserSchema)
