const Sequelize=require('sequelize');

module.exports = class Actor_info extends Sequelize.Model{
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
            film_info:{
                type:Sequelize.TEXT,
                allowNull:false
            }

            //actor_id, first_name, last_name, last_update
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            modelName:'Actor_info',
            tableName:'actor_info',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        });
    }
}