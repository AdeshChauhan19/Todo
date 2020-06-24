const express=require('express');
const router=express.Router();
const Task=require('../model/Task')
//Using serialize

router.get('/tasks',(req,res)=>{
    Task.findAll().then
    (
        tasks=>{
            res.status(200).json(tasks);
        }
    ).catch(err=>{
        res.status(400).send('Error'+err);
    })
})

router.get('/tasks/:id',(req,res)=>{
    Task.findOne({
        where:{
            id:req.params.id
        }
    }).then(task=>{
        if(task){
            res.status(200).json(task)
        }
        else{
            res.status(404).send('Task Not found')
        }
    }).catch(err=>{
        res.status(400).send('Error'+err);
    })
})

router.post('/task',(req,res)=>{
    if(!req.body.task_name){
        res.status(400);
        res.json({
            error:'Bad Data'
        })
    }else{
        Task.create(req.body).then(
            data=>{
                res.send(data);
            }
        ).catch(err=>{
            res.json('error'+err)
        })
    }
})

router.delete('/task/:id',(req,res)=>{
    Task.destroy({
        where:{
            id:req.params.id
        }
    }).then(()=>{
        res.json({status:'Task Deleted'})
    }).catch(err=>{
        res.send('Task Not found')
    })
})

router.put('/task/:id',(req,res)=>{
    if(!req.body.task_name){
        res.status(400).json({error:'Bad Data'})
    }else{
        Task.update(
            {task_name:req.body.task_name},
            {where:{id:req.params.id}}
        ).then(()=>{
            res.json({status:'Task Updated'})
        }).catch(err=>console.log('Error'+err))
    }
})

module.exports=router;