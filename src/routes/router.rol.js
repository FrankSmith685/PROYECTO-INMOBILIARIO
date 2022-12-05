const {Router}=require('express');
const { getAllRol } = require('../controllers/controller.rol');

const router=Router();



router.get('/', async(req,res,next)=>{
    try{
        let role = await getAllRol()
        role.length>0?
        res.send(role):res.send({message:"No rol"})
    }
    catch(error){next(error); console.log(error)}
})

module.exports=router;