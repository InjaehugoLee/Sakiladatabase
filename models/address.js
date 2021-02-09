const Sequelize=require('sequelize');

module.exports = class Address extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            address_id:{
                type:Sequelize.SMALLINT,
                allowull:false
            },
            address:{
                type:Sequelize.STRING(50),
                allowNull:false
            },
            address2:{
                type:Sequelize.STRING(50),
                allowNull:true
            },
            district:{
                type:Sequelize.STRING(20),
                allowNull:false
            },
            city_id:{
                type:Sequelize.SMALLINT,
                allowNull:false
            },
            postal_code:{
                type:Sequelize.STRING(10),
                allowNull:false
            },
            phone:{
                type:Sequelize.STRING(20),
                allowNull:false,
            },
            location:{
                type:Sequelize.GEOMETRY,
                allowNull:false
            },
            last_update:{
                type:Sequelize.DATE,
                allowNull:false,
            }
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            modelName:'Address',
            tableName:'address',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        });
    }
}