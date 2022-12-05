const { Rol } = require("../db");

const getAllRol= async()=>{
    let role=await Rol.findAll();
    return role;
}

module.exports={
    getAllRol
}