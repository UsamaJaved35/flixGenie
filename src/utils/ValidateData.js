const validateData=(email,password)=>{
   const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
   const isPassValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password);

   if(!isEmailValid) return "Email is not valid";
   if(!isPassValid) return "Password is not valid"

   return null;
}
export default validateData;