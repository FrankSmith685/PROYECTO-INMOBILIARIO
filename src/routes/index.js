const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const userRouter=require("./router.user.js");
const userRol=require("./router.rol.js");



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/users",userRouter);
router.use("/rol",userRol);



module.exports = router;
