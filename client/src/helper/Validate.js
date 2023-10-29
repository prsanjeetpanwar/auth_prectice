import toast from "react-hot-toast"

// Validate login page username
export async function usernameValidate(values) {
  const error = usernameVerify({}, values);
  return error;
}

// Validate password
export async function passwordValidate(values) {
  const error = passwordVerify({}, values);
  return error;
}

// Validate username
function usernameVerify(error = {}, values) {
    const usernameRegex = /^[a-zA-Z0-9_]+$/; // Define your username validation regex
  
    if (!values.username.trim()) {
      error.username = toast.error('Username required');
    } else if (!usernameRegex.test(values.username)) {
      error.username = toast.error('Invalid Username...!');
    }
    return error;
  }
// Validate password
function passwordVerify(errors = {}, values){
    /* eslint-disable no-useless-escape */
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if(!values.password){
        errors.password = toast.error("Password Required...!");
    } else if(values.password.includes(" ")){
        errors.password = toast.error("Wrong Password...!");
    }else if(values.password.length < 4){
        errors.password = toast.error("Password must be more than 4 characters long");
    }else if(!specialChars.test(values.password)){
        errors.password = toast.error("Password must have special character");
    }

    return errors;
}

function emailVerify(error = {}, value) {
    const specialCharacters = /[!@#$%^&*()_+\-=\[\]{}|\\;:'"<>/?,.~`]/;
    if (!value.email) {
      error.email = toast.error('Email Required');
    } else if (!/^\S+@\S+\.\S+$/.test(value.email)) {
      error.email = toast.error('Invalid Email address');
    } else if (!specialCharacters.test(value.email)) {
      error.email = toast.error('Email contains special characters');
    }
    return error;
  }
  

///validate reset password

export async function resetPasswordVlidation(values){


    const error=passwordVerify({},values)

    if(values.password!==values.conform_pwd){
        error.password=toast.error('Password does not match')
    }
    return error


}




//vlaidate register 
export async function registerValidate(value) {
    const error = {};
    
    await usernameVerify(error, value);
    await passwordVerify(error, value);
    await emailVerify(error, value);
  
    return error;
  }



  //validate profile

  export async function profileValidation(value){
  
    

const  error=emailVerify({},value)
return error
  }


