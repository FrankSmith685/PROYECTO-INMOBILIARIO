const {Router}=require('express');
const { crearUser, obtenerUsers } = require('../controllers/controller.user');
const { User } = require('../db');

const router=Router();

router.post('/',async(req,res,next)=>{
    // lastname, businessname, document,Nrodocument, mobilephone, rol
    let {id,email, password, name,  lastname, businessname, document,Nrodocument, mobilephone,credential,rol}=req.body
    try{
        let userCreado=await crearUser(id, email, password, name ,  lastname, businessname, document,Nrodocument, mobilephone,credential ,rol)
        userCreado.flag? res.send(userCreado.message)
        :res.send(userCreado.message)
    }
    catch(error){console.log(error.message); next(error)}
})

router.get('/', async(req,res,next)=>{
    try{
        let users = await obtenerUsers()
        users.length>0?
        res.send(users):res.send({message:"No users"})
    }
    catch(error){next(error); console.log(error)}
})

router.put('/:id',async(req,res,next)=>{
    let {email, password, name,  lastname, businessname, document,Nrodocument, mobilephone,credential,rol}=req.body
    let {id}=req.params;
      
      try{
          await User.update(
            {email, password, name,  lastname, businessname, document,Nrodocument, mobilephone,credential,rol},
            {where: {id}}
          )
  
          if(rol){
            let role = await Role.findOne({where: {name:rol}})
            let user = await User.findByPk(id)
            
            await user.setRole(role)
            user.save();
          }
  
          return res.status(200).json("User updated")
  
      }
      catch(error){next(error)}
  })

module.exports=router;