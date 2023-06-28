import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  //   useEffect(() => {
  //     (async () => {
  //         const response = await getRedirectResult(auth);
  //         if(response){
  //            const userDocRef = await createUserDocumentFromAuth(response.user);
  //        }
  //     })();
  //     return () => {
  //       // this now gets called when the component unmounts
  //     };
  //   }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}

      <SignUpForm />
    </div>
  );
};

export default SignIn;