import { Provider } from 'react-redux';
import Body from './components/Body';
import appStore from './utils/appStore';
import Footer from './components/Footer';

function App() {
  // const handleGoogleSignIn = () => {
  //   const provider = new GoogleAuthProvider();
  //   const auth = getAuth();
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       console.error("Error during sign-in:", error);
  //     });
  // };
  return (
    <>
    {/* <div>
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
    </div> */}
    <Provider store={appStore}>
    <Body/>
    </Provider>
    <Footer/>
    </>
  );
}

export default App;
