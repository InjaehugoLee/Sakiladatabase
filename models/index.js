const Sequelize = require('sequelize');
const Actor = require('./actor');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.sequelize = sequelize;

db.Actor = Actor;
Actor.init(sequelize);
Actor.removeAttribute('id');

module.exports = db;
