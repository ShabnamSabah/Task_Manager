const Sequelize = require('sequelize');
const db= require('../config/database');


//creating model for "User"

const User = db.define('users',{
name:{
type: Sequelize.STRING

},
email:{
    type: Sequelize.STRING
    
},
password:{
   type: Sequelize.STRING
        
},
},
{
    timestamps:false
});    



module.exports= User;
