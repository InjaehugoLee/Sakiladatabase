const express = require('express');
const router = express.Router();
const {Address} = require('../models');
const {Op}= require('sequelize');


// req.body 는 데이터를 보이지 않게 보냄.
// req.body 또는 req.query
// router.patch('/', async(req, res)=>{
//     console.log(req.query.abc);
//     const e= req.query.first_name;
//     let ret = [];
//     await Address.update(
//         {first_name:e},
//         {where:{actor_id:1}}
//     ).then(data=>{
//         ret = data;
//     }).catch(err=>{
//         console.log(err);
//     })
//     res.json({ret:ret});
// })

// 쿼리 날리는 법
// http://localhost:4000/address/100
// router.get('/:id', async(req, res)=>{
//     const q = req.params.id;
//     //const field = req.query.fielde.split(',');
//     let ret=[];
//     await Address.findAll({
//         // attributes:field,
//         where:{address_id:q}   
//     }).then(data=>{
//         ret = data;
//     }).catch(err=>{
//         ret ='error';
//     });
//     res.json({ret:ret});
// });

// http://localhost:4000/address/100?fields=address,phone
router.get('/:id', async(req, res)=>{
    const q = req.params.id;
    const fields = req.query.fields.split(',');
    let ret=[];
    await Address.findAll({
        attributes:fields,
        where:{address_id:q}   
    }).then(data=>{
        ret = data;
    }).catch(err=>{
        ret ='error';
    });
    res.json({ret:ret});
});

router.post('/', async(req, res)=>{
    const f = req.body.address_id;
    const fields = req.body.fields;
    let ret=[];
    await Address.findAll({
        where:{address_id:f}
    }).then(data=>{
        ret = data;
    }).catch(err=>{
        ret = 'error';
    });
    res.json({ret:ret});
})

// router.get('/', async(req, res)=>{
//     let ret = [];
//     await Address.findAll({
        
//     }).then(data=>{
//         ret = data;
//     }).catch(err=>{
//         ret = 'error';
//     })
//     res.json({ret:ret});
// });

// router.get('/', (req, res)=>{
//     res.json({index:`${req.method}:${req.url}`});
// });

router.post('/', (req, res)=>{
    res.json({index:`${req.method}:${req.url}`});
});

module.exports=router;