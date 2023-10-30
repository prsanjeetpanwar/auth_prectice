import { Router } from "express";
/**import controller */
import auth ,{localvariables}from "../middlewares/Auth.js";
import { registerMail } from "../controllers/Mailer.js";

import *as controller from '../controllers/Appcontroller.js'

const routers=Router()







routers.route('/register').post(controller.register)
  
routers.route('/registermail').post(registerMail)

routers.route('/authenticate').post((req,res)=>res.end())
routers.route('/login',).post(controller.verifyUser,controller.login)

/*Get routes*/
routers.route('/user/:username').get(controller.getUser)
routers.route('/generateOTP').get(controller.verifyUser,localvariables,controller.generateOTP)
routers.route('/verifyOTP').get(controller.verifyOTP)
routers.route('/createResetSession').get(controller.createResetSession)


/**Put routes */

routers.route('/updateuser').put(auth,controller.updateUser)
routers.route('/resetPassword').put(controller.verifyUser,controller.resetPassword)


export default routers;