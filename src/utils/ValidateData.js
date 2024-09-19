const validateData=(email,password,isSignIn)=>{
   if(!isSignIn){
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      const isPassValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
   
      if(!isEmailValid) return "Email is not valid";
      if(!isPassValid) return "Password must be at least 8 characters long, and include uppercase, lowercase, number, and special character."
      return null;
   }
   else{
      if(!email) return "Email Cannot be Empty";
      if(!password) return "Password Can't be Empty"
   }
}
export default validateData;