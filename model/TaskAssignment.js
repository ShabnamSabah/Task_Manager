const Sequelize = require('sequelize');
const db = require('../config/database');
const moment = require("moment")

//creating model for assigning tasks to Users

const TaskAssignment = db.define('task_assignment', {
   
    status:{
        type: Sequelize.STRING,
        defaultValue: "No"
    },
   
      
    
},

    {
        timestamps: false
    }
);



module.exports = TaskAssignment;


