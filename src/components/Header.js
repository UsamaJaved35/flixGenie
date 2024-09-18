import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch,useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect, useState } from "react";
import { NETFLIX_LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
const Header=()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(prevState => !prevState);
    };
    const user = useSelector(store => store.user)
    const showGptSearchView = useSelector(store => store.gpt.showGptSearchView)
    // Toggle dropdown visibility
    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView());
        if (isSidebarOpen) toggleSidebar();
    };
    const handleSignOut =()=>{
        signOut(auth).then(() => {
        })
        .catch((error) => {
            navigate('/error')
        });
        if (isSidebarOpen) toggleSidebar(); 
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid , email , displayName, photoURL } = user
                dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                navigate('/browse')
            } else {
                dispatch(removeUser())
                navigate('/')
            }
        });
        return () => unsubscribe()
    },[])
    return(
        <>
        <div className="absolute px-8 py-2 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.9)] md:bg-gradient-to-b md:from-black z-40 w-screen flex md:flex-row justify-between">
            <img className="w-44 mx-auto md:mx-0" src={NETFLIX_LOGO}
            alt="logo"/>
       {user && 
       <>
       <div className="flex p-6 md:bg-transparent">
        <button className="text-white hidden md:block bg-purple-700 px-4 py-2 rounded-lg mx-2 md:h" onClick={handleGptSearchClick}>
           {showGptSearchView ? "Home" :"Gpt Search" }
        </button>
        <button className=" hidden md:block text-white font-bold px-4 py-2 mx-2 bg-red-700 rounded-lg" onClick={handleSignOut}> Sign Out </button>
        <img className="w-12 h-12 cursor-pointer rounded-3xl md:rounded-none ml-auto" alt="User Avatar" src={user?.photoURL} onClick={toggleSidebar}/>
        </div>
        
        {isSidebarOpen && (
  <div className="fixed inset-0 md:hidden">
    {/* Close Sidebar on Click Outside */}
    <div
      className="fixed inset-0 bg-black bg-opacity-75 z-40"
      onClick={() => {
        if (isSidebarOpen) toggleSidebar();
      }}
    ></div>

    {/* Sidebar Content */}
    <div
      className="relative w-40 h-full bg-gray-800 text-white p-6 z-50"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="text-white bg-purple-700 text-sm w-full px-4 py-2 rounded-lg mb-4 cursor-pointer"
        onClick={handleGptSearchClick}
      >
        {showGptSearchView ? "Home" : "Gpt Search"}
      </button>

      <button
        className="text-white font-bold w-full text-sm px-4 py-2 bg-red-700 rounded-lg"
        onClick={handleSignOut}
      >
        Sign Out
      </button>
    </div>
  </div>
)}
        </>
        }
        </div>
        </>
    );
}
export default Header;