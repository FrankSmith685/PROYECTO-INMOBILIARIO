const {DataTypes} =require('sequelize')

module.exports=(sequelize)=>{
    sequelize.define('user',{
        id:{type:DataTypes.STRING,unique:true , primaryKey:true},
        email: {type: DataTypes.STRING,allowNull: false, unique: true},
        password:{type:DataTypes.STRING},
        name:{ type:DataTypes.STRING},
        lastname:{type:DataTypes.STRING},
        businessname:{type:DataTypes.STRING},
        document:{type:DataTypes.STRING},
        Nrodocument:{type:DataTypes.STRING},
        mobilephone:{ type:DataTypes.STRING},
        credential:{type:DataTypes.JSON}
        // disabled:{type:DataTypes.BOOLEAN, defaultValue: false,allowNull: false}
    },{
        timestamps:false
    });
};