import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch,useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect, useRef, useState } from "react";
import { toggleGptSearchView } from "../utils/gptSlice";
import { FaSearch } from "react-icons/fa";
const Header=()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    
    const user = useSelector(store => store.user)
    const showGptSearchView = useSelector(store => store.gpt.showGptSearchView)
    // Toggle dropdown visibility
    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView());
    };
    const handleSignOut =()=>{
        signOut(auth).then(() => {
        })
        .catch((error) => {
            navigate('/error')
        });
    }
    const toggleDropdown = () => {
      setIsDropdownOpen((prev) => !prev);
    };
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
      // eslint-disable-next-line
    },[])

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target)
        ) {
          setIsDropdownOpen(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
    return(
        <>
          <div className="absolute px-8 outline-black z-50">
            <img
              className="w-36 -mt-6 -ml-10 mx-auto md:mx-0 md:w-48"
              src={`${process.env.PUBLIC_URL}/main_logo.png`}
              alt="logo"
            />
          </div>
          <div className="absolute px-8 md:-mt-8 bg-gray-800 md:bg-transparent md:bg-gradient-to-b md:from-black z-40 w-screen flex justify-end md:flex-row">
  {user && (
    <>
    <div className="flex p-6 md:p-14 md:bg-transparent items-center">
      {showGptSearchView ? (
        <button
          className="text-white hidden md:block bg-purple-700 px-4 py-2 rounded-lg mx-2"
          onClick={handleGptSearchClick}
        >
          Home
        </button>
      ) : (
        <button
          className="flex gap-2 items-center text-white bg-transparent px-4 py-2 rounded-lg mx-2 md:mx-0 cursor-pointer hover:text-gray-400"
          onClick={handleGptSearchClick}
        >
          <FaSearch />
          <span className="font-semibold">GPT Search</span>
        </button>
      )}
      <button
        className="hidden md:block text-white font-bold px-4 py-2 mx-2 bg-[#e50914] hover:bg-[#f6121d] rounded-lg cursor-pointer"
        onClick={handleSignOut}
      >
        Sign Out
      </button>
      <img
        className="w-8 h-8 md:w-8 md:h-8 cursor-pointer rounded-3xl md:rounded-none ml-auto"
        alt="User Avatar"
        src={user?.photoURL}
        onClick={toggleDropdown}
      />
      {isDropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute right-0 mr-3 border border-gray-700 top-full min-w-[150px] md:-mt-12 -mt-4 w-35 bg-black/80 rounded-md shadow-lg z-50 transition ease-out duration-100 transform opacity-100 scale-100"
                >
                  <button
                    className="w-full text-left px-4 py-2 text-sm text-white font-bold flex items-center"
                    onClick={() => {
                      handleGptSearchClick();
                      setIsDropdownOpen(false);
                    }}
                  >
                    {showGptSearchView ? "Home" : "GPT Search"}
                  </button>
                  <button
                    className="w-full text-left px-4 py-2 text-sm text-white font-bold"
                    onClick={() => {
                      handleSignOut();
                      setIsDropdownOpen(false);
                    }}
                  >
                    Sign Out
                  </button>
                </div>
              )}
    </div>
        </>
        )}
        </div>
        </>
    );
}
export default Header;