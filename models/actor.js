const Sequelize=require('sequelize');

module.exports = class Actor extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            actor_id:{
                type:Sequelize.SMALLINT,
                allowull:false
            },
            first_name:{
                type:Sequelize.STRING(45),
                allowNull:false
            },
            last_name:{
                type:Sequelize.STRING(45),
                allowNull:false
            },
            last_update:{
                type:Sequelize.DATE,
                allowNull:false,
                defaultValue:Sequelize.NOW
            }

            //actor_id, first_name, last_name, last_update
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            modelName:'Actor',
            tableName:'actor',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        });
    }
}