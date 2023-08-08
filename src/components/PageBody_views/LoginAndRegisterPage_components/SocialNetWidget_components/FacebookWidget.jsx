import { IconButton } from "@chakra-ui/react"
import { BiLogoFacebook} from "react-icons/bi"
import { FacebookAuthProvider,signInWithPopup } from "firebase/auth";
import { FirebaseConfig } from "../../../../utils/FirebaseConfig";

export default function FacebookWidget() {
    const provider = new FacebookAuthProvider();
    const {firebaseAuth} = FirebaseConfig();
    const auth = firebaseAuth;

    const FacebookSignIn = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = FacebookAuthProvider.credentialFromResult(result);
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
            console.log(error.message)
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = FacebookAuthProvider.credentialFromError(error);
            // ...
        });
    }

  return (
    <IconButton 
    icon={<BiLogoFacebook size='2em' />} 
    isRound={true}
    onClick={FacebookSignIn}
    ></IconButton>
  )
}
