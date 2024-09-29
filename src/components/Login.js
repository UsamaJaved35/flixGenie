import { useRef, useState } from "react";
import validateData from "../utils/ValidateData";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase"
import Header from "./Header";
import { useDispatch } from "react-redux";
import  {addUser}  from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";
import { FIREBASE_ERROR_MESSAGES } from "../utils/constants";
const Login=()=>{
    const [IsSignInForm,setIsSignInForm]=useState(true)
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMsg,setErrMsg]=useState(null)
    const dispatch = useDispatch()
    const name = useRef(null)
    const email=useRef(null)
    const password = useRef(null)
    const handleToggle=()=>{
        setIsSignInForm(!IsSignInForm)
    }
    const getErrorMessage = (errorCode) => {
        return FIREBASE_ERROR_MESSAGES[errorCode] || 'An unknown error occurred. Please try again later.';
      };
    const handleSubmit=()=>{
            if(!IsSignInForm){
                const error = validateData(email.current.value,password.current.value,false)
                if(!error){
                    setIsSubmitting(true)
                    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        updateProfile(user, {
                        displayName: name.current.value , photoURL: USER_AVATAR
                        }).then(() => {
                            const {uid , email , displayName , photoURL} = auth.currentUser
                            dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                            setIsSubmitting(false)
                        }).catch((error) => {
                            setErrMsg(getErrorMessage(error.code))
                            setIsSubmitting(false)
                        });
                    })
                    .catch((error) => {
                        setErrMsg(getErrorMessage(error.code))
                        setIsSubmitting(false)
                    });
                }
                else{
                    setErrMsg(error)
                    setIsSubmitting(false)
                }
            }
            else{
                const error = validateData(email.current.value,password.current.value,true)
                if(!error){
                    setIsSubmitting(true)
                    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then((userCredential) => {
                        setIsSubmitting(false)
                    })
                    .catch((error) => {
                        setErrMsg(getErrorMessage(error.code))
                        setIsSubmitting(false)
                    });
                }
                else{
                    setErrMsg(error)
                    setIsSubmitting(false)
                }
            }
        }
    return(
        <>
        <Header/>
        <div className="fixed -z-20">
            <img className='h-screen object-cover' src= {BG_URL} alt="logo"/>
        </div>
        <div onSubmit={(e)=>e.preventDefault()} className="w-3/4 md:w-[25%] absolute p-12 my-36 bg-black/80 mx-auto right-0 left-0 text-white">
            <h1 className="text-xl md:text-3xl font-bold p-2 my-2">{IsSignInForm ? "Sign In": "Sign Up"}</h1>
            {!IsSignInForm && <input type="text" required ref={name} placeholder="Enter Your Full Name" className="px-4 py-4 my-2 w-full bg-transparent border border-white text-white rounded-[4px] focus:border-white focus-visible:outline-none text-sm"/>}
            <input type="email" ref={email} required placeholder="Enter Your Email" className="px-4 py-4 my-2 w-full bg-transparent border-white border text-white rounded-[4px] focus:border-white focus-visible:outline-none text-sm"/>
            <input type="password" ref={password} required placeholder="Enter Your Password" className="px-4 py-4 my-2 w-full bg-transparent border border-white text-white rounded-[4px] focus:border-white focus-visible:outline-none text-sm"/>
            <p className="text text-red-500 font-bold text-lg py-2">{errorMsg}</p>
            <button type="submit" className={`p-4 my-4 w-full font-bold bg-[#e50914] hover:bg-[#f6121d] flex justify-center items-center ${isSubmitting? 'bg-[#e50914] opacity-50 cursor-not-allowed': 'bg-[#e50914] hover:bg-[#f6121d]'}`} onClick={handleSubmit}>
                {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                            ) : (IsSignInForm ? "Sign In" : "Sign Up")}</button>
            <p className="m-2 p-2 cursor-pointer font-bold" onClick={handleToggle}>{IsSignInForm ? <>New to FlixGenie? <u>Sign Up now.</u></>:<> Already Registered? <u>Sign In now</u>. </>}</p>
        </div>
        </>
    );
}
export default Login;
// px-4 py-4 w-full text-white bg-transparent border border-white rounded-[4px] focus:border-white focus-visible:outline-none text-sm border-white