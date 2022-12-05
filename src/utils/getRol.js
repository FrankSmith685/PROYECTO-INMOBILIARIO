
const {Rol}=require("../db.js")
//Creamos nuevas Dietas
const Roles=["Particular","Inmobiliaria","Constructora","Agente"];



const getRol= async()=>{
    if(!(await Rol.findAll()).length){
        //Convertir los datos en un objeto
        const roles=Roles.map((rol)=>{
            return{
                name:rol
            }
        })
        await Rol.bulkCreate(roles);
        console.log("Creamos las Roles");
    }
    else{
        console.log("Ya tengo Rol");
    }

}

module.exports={
    getRol
}