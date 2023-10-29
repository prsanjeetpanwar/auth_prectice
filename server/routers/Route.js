import { Router } from "express";

const routers=Router()


//routes
/**Post routes */

routers.post('/register',(req,res)=>{

    res.json('regsiter route')
})

routers.post('registerMail',(req,res)=>{
    res.json('Register mail')
})


routers.post('/authentication')
routers.post('/login')

/*Get routes*/
routers.get('/user/:username')
routers.get('/generateOTP')
routers.get('/verifyOTP')
routers.get('/createResetSession')


/**Put routes */

routers.put('/updateuser')
routers.put('/resetPassword')


export default routers;