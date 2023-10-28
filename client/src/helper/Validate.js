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
  if (!values.username.trim()) {
    error.username = toast.error('Username required');
  } else if (values.test(values.username)) {
    error.username = toast.error('Invalid Username...!');
  }
  return error;
}

// Validate password
function passwordVerify(error = {}, values) {
  const specialCharacters = /[!@#$%^&*()_+\-=\[\]{}|\\;:'"<>/?,.~`]/;

  if (!values.password.trim()) {
    error.password = toast.error("Password required");
  } else if (values.password.length < 4) {
    error.password = toast.error("Password length should be more than 4");
  } else if (!specialCharacters.test(values.password)) {
    error.password = toast.error('Should have special characters');
  }
  return error;
}
