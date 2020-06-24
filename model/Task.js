const Sequelize=require('sequelize');
const db=require('../config/database')

module.exports=db.define('tbl_task',
{
    
    // id:{
    //     type:Sequelize.INTEGER,
    //     primaryKey:true,
    //     autoincrement:true
    // },
 
    task_name:{
        type:Sequelize.STRING
    },
    
},{
    timestamps:false 
})
