const {DataTypes} =require('sequelize')

module.exports=(sequelize)=>{
    sequelize.define('rol',{
        name: {type: DataTypes.STRING,defaultValue:"Particular",allowNull: false},
    },{
        timestamps:false
    });
};