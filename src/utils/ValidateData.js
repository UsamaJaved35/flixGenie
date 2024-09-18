const validateData=(email,password)=>{
   const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
   const isPassValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

   if(!isEmailValid) return "Email is not valid";
   if(!isPassValid) return "Password must be at least 8 characters long, and include uppercase, lowercase, number, and special character."
   return null;
}
export default validateData;