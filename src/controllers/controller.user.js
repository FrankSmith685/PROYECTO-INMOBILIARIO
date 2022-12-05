const { User, Rol } = require("../db");

// Crear Usuario
// 
const crearUser = async (id,email, password, name,  lastname, businessname, document,Nrodocument, mobilephone,credential, rol) => {
    let existe = await User.findOne({ where: { email: email } })
    if (existe) { console.log(email + " ya existe!"); return { flag: false, message: "ya existe el usuario" } }

    // if (!rol) {
    //     role = "Particular"
    // }
    // if(email==="nahirarroyo99@gmail.com"){
    //     role="Administrador"
    // }
    // if (email === "asanchezdelaf2@gmail.com") {
    //     role = "Administrador"
    // }
    // if (email === "valdezfede21@gmail.com") {
    //     role = "Administrador"
    // }
  

    let role = await Rol.findOne({ where: { name: rol } })

    let user = await User.create({
        id:id,
        email: email,
        password: password,
        name: name,
        lastname:lastname,
        businessname:businessname,
        document:document,
        Nrodocument:Nrodocument,
        mobilephone: mobilephone,
        credential:credential
        // disabled: false
    })

    await user.setRol(role);
    user.save();
    return { flag: true, message: "Usuario creado" }
}


//where: { disabled: false },  

const obtenerUsers=async()=>{
    let users=await User.findAll();
    let toObj=[]
    users?.map((e)=>{
        toObj.push({
            id: e.id,
            email: e.email,
            password: e.password,
            name: e.name,
            lastname: e.lastname,
            businessname: e.businessname,
            document: e.document,
            Nrodocument:e.Nrodocument,
            mobilephone: e.mobilephone,
            credential:e.credential,
            rol:e.rolId
        })
    })
    

    return toObj;
}
module.exports = { crearUser, obtenerUsers }