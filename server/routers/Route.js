import { Router } from "express";
/**import controller */

import *as controller from '../controllers/Appcontroller.js'

const routers=Router()







routers.route('/register').post(controller.register)
  

// routers.post('registerMail',(req,res)=>{
//     res.end()
// })


routers.route('/authenticate').post((req,res)=>res.end())
routers.route('/login',).post(controller.login)

/*Get routes*/
routers.route('/user/:username').get(controller.getUser)
routers.route('/generateOTP').get(controller.generateOTP)
routers.route('/verifyOTP').get(controller.verifyOTP)
routers.route('/createResetSession').get(controller.createResetSession)


/**Put routes */

routers.route('/updateuser').put(controller.updateUser)
routers.route('/resetPassword').put(controller.resetPassword)


export default routers;