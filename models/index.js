const Sequelize = require('sequelize');
const Actor = require('./actor');
const Actor_info = require('./actor_info');
const Address = require('./address');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.sequelize = sequelize;

db.Actor = Actor;
Actor.init(sequelize);
Actor.removeAttribute('id');
db.Actor_info = Actor_info;
Actor_info.init(sequelize);
Actor_info.removeAttribute('id');
db.Address = Address;
Address.init(sequelize);
Address.removeAttribute('id');

module.exports = db;
