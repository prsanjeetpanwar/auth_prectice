import UserModel from "../model/UserModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import otpGenerator from 'otp-generator'






export async function register(req, res) {
    try {
      const { username, password, profile, email } = req.body;
  
     
      const existUsername = await UserModel.findOne({ username });
      const existEmail = await UserModel.findOne({ email });
  
      if (existUsername) {
        return res.status(400).json({ error: "Please use a unique username" });
      }
  
      if (existEmail) {
        return res.status(400).json({ error: "Please use a unique email" });
      }
  
      // Rest of your registration logic
      if (password) {
        bcrypt.hash(password, 10)
          .then(hashedPassword => {
            const user = new UserModel({
              username,
              password: hashedPassword,
              profile: profile || '',
              email,
            });
  
            // Save the user
            user.save()
              .then(result => res.status(201).send({ msg: "User registered successfully" }))
              .catch(err => res.status(500).send(err));
          })
          .catch(err => res.status(500).send({ err: "Unable to hash password" }));
      }
    } catch (err) {
      return res.status(500).send({ err: "Some error occurred" });
    }
  }











export async function login(req,res){

  try{
   const {username,password}=req.body;


   const user=await UserModel.findOne({username})


   if(!user){
    return res.status(404).send({error:"User is not found"})
   }

   const passwordcheck=await bcrypt.compare(password,user.password)


   if(!passwordcheck){
    return res.status(400).send({error:"Password does not match"})



   }


   const token=jwt.sign(
    {
        userId:user._id,
        username:user.username
    },"jsontoken"
   )




   return res.status(200).send({
    meg:"Login successfully...!",
    username:user.username,
    token
   })

  }catch(err){

return res.status(500).send({err:"this is errr"})
  }










}
export async function getUser(req, res) {
    try {
        const { username } = req.params;

        if (!username) {
            return res.status(400).send({ error: "Invalid Username" });
        }

        const user = await UserModel.findOne({ username });

        if (!user) {
            return res.status(404).send({ error: "Can't find the user" });
        }

        const { password, ...rest } = user.toJSON();

        return res.status(200).send(rest);
    } catch (err) {
        return res.status(500).send({ error: "Cannot find user" });
    }
}


export async function updateUser(req, res) {
    try {
        // const id = req.query.id;
        const {userId}=req.user
        if (id) {
            const body = req.body;
            const result = await UserModel.updateOne({ _id: userId }, { $set: body });
            if (result.n > 0) {
                return res.status(201).send({ msg: "Record Updated...!" });
            } else {
                // If no documents matched, you can still consider it a success.
                return res.status(201).send({ msg: "No changes made" });
            }
        } else {
            return res.status(400).send({ error: "User not found" });
        }
    } catch (error) {
        return res.status(500).send({ error: "An error occurred" });
    }
}

export async function verifyUser(req, res, next){
    try {
        
        const { username } = req.method == "GET" ? req.query : req.body;

        // check the user existance
        let exist = await UserModel.findOne({ username });
        if(!exist) return res.status(404).send({ error : "Can't find User!"});
        next();

    } catch (error) {
        return res.status(404).send({ error: "Authentication Error"});
    }
}



export async function generateOTP(req,res){
req.app.locals.OTP= await otpGenerator.generate(6,{lowerCaseAlphabets:false, upperCaseAlphabets:false,
specialChars:false
})
res.status(201).send({code:req.app.locals.OTP})
  
}

export async function verifyOTP(req,res){

   const {code}=req.query

   if(parseInt(req.app.locals.OTP)===parseInt(code)){
    req.app.locals.OTP=null  //reset opt value
    req.app.locals.resetSession=true   //start session for reset password
      return  res.status(201).send({msg:"Verify Successfully"})
    }
    return res.status(400).send({error:"invalid otp"})
}




export async function createResetSession(req,res){

   if(req.app.locals.resetSession){
    req.app.locals.resetPassword=false  //asllow access thhis route only onece
      return res.status(201).send({msg:"access granted"})
   }
   res.status(404).send({err:"Session Expired"})
}




export async function resetPassword(req, res) {
    try {


        if(!req.app.locals.resetSession)   res.status(404).send({err:"Session Expired"})
        const { username, password } = req.body;

        const user = await UserModel.findOne({ username });

        if (!user) {
            return res.status(404).send({ error: "Username not found" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await UserModel.updateOne({ username: user.username }, { password: hashedPassword });

        return res.status(201).send({ msg: "Password reset successful" });
    } catch (error) {
        return res.status(500).send({ error: "An error occurred" });
    }
}




