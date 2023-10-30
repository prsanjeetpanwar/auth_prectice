import jwt from 'jsonwebtoken'

export default async function auth(req,res,next){
    try{

     //access authorize header

    const token= req.headers.authorization.split(" ")[1]
    
    const decodedtoken=await jwt.verify(token,"jsontoken")

    req.user=decodedtoken
   next()

    //retrive the user details






    }
    catch(err){
  res.status(401).json({err:"Authentication failed"})
    }
}


export function localvariables(req,res,next){

   req.app.locals={
    OTP :null,
    resetSession:false
   } 
   next()
}