const express = require('express');
const app = express();
const morgan = require('morgan');

const routes = require('./myroutes');
const routesactor = require('./myroutes/actor');

const {sequelize} = require('./models');
sequelize.sync({force:false})
.then(()=>{console.log("데이터베이스 연결 성공");})
.catch((err)=>{console.log(err);});

app.set('port', 4000);
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/', routes);
app.use('/actor', routesactor);

app.listen(app.get('port'), ()=>{
    console.log('waiting to connect...');
});