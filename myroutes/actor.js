const express = require('express');
const router = express.Router();
const {Actor} = require('../models');
const {Op}= require('sequelize');

Actor.create({
    first_name:'Ingnacio',
    last_name:'Rodriguez',
})
// req.body 는 데이터를 보이지 않게 보냄.
// req.body 또는 req.query
router.patch('/', async(req, res)=>{
    console.log(req.query.abc);
    const e= req.query.first_name;
    let ret = [];
    await Actor.update(
        {first_name:e},
        {where:{actor_id:1}}
    ).then(data=>{
        ret = data;
    }).catch(err=>{
        console.log(err);
    })
    res.json({ret:ret});
})

// 쿼리 날리는 법
// http://localhost:4000/actor?actor_id=5&fields=actor_id,first_name,last_name
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