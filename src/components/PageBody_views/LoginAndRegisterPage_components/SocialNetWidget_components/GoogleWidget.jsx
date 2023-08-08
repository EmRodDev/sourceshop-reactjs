import { IconButton } from "@chakra-ui/react"
import { BiLogoGoogle } from "react-icons/bi"
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { FirebaseConfig } from "../../../../utils/FirebaseConfig";
export default function GoogleRegisterWidget() {
    
    const provider = new GoogleAuthProvider();
    const {firebaseAuth} = FirebaseConfig();
    const auth = firebaseAuth;

    const GoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(result);
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }
  return (
    <IconButton 
    icon={<BiLogoGoogle size='2em' />} 
    isRound={true}
    onClick={GoogleSignIn}
    ></IconButton>

  )
}
