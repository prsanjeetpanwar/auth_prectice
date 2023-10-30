import UserModel from "../model/UserModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'







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
        const id = req.query.id;
        if (id) {
            const body = req.body;
            const result = await UserModel.updateOne({ _id: id }, { $set: body });
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



export async function generateOTP(req,res){

    res.json('Generate otp Route')
}

export async function verifyOTP(req,res){

    res.json('verifyOTP Route')
}



export async function createResetSession(req,res){

    res.json('createResetSession Route')
}





export async function resetPassword(req,res){

    res.json('resetPassword Route')
}












