const express = require('express');
const router = express.Router();
const {Actor} = require('../models');
const {Op}= require('sequelize');

// 쿼리 날리는 법
// http://localhost:4000/actor?actor_id=5&fields=actor_id,first_name,last_name

Actor.create({
    first_name:'Ingnacio',
    last_name:'Rodriguez',
})

router.get('/', async(req, res)=>{
    const q = req.query.actor_id;
    const fields = req.query.fields.split(',');
    let ret=[];
    await Actor.findAll({
        attributes:fields,
        where:{actor_id:q}   
    }).then(data=>{
        ret = data;
    }).catch(err=>{
        ret ='error';
    });
    res.json({ret:ret});
});

router.post('/', (req, res)=>{
    res.json({index:`${req.method}:${req.url}`});
});

module.exports=router;