const Sequelize=require('sequelize');
const db=new Sequelize('tasks','postgres','Bhaibhai123',{
    host:'localhost',
    dialect:'postgres',
    operatorAliases:false,
    pool:{
        max:5,
        min:0,
        acquire:3000,
        idle:1000
    }
});


module.exports=db;