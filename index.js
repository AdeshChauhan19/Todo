const express=require('express');
const app=express();
const bodyParser=require('body-parser'); 
const cors=require('cors');
const db=require('./config/database');

//middleware
app.use(cors());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
// app.use(express.json());//req.body

app.use('/api',require('./routes/task'));

//db check
db.authenticate().then(()=>{
    console.log('Database Connected');
}).catch(err=>console.log('Error'+err));

//routes
app.use('/',require('./routes/task'));

db.sync({force:true,
    logging:console.log}).then(
        app.listen(5000,()=>{
            console.log("Server is running on 5000");
            
        })
).catch(err=>console.log('err'+err))
