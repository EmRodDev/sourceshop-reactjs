import { IconButton } from "@chakra-ui/react"
import { BiLogoTwitter } from "react-icons/bi"
import { TwitterAuthProvider,signInWithPopup } from "firebase/auth";
import { FirebaseConfig } from "../../../../utils/FirebaseConfig";

export default function TwitterWidget() {
    const provider = new TwitterAuthProvider();
    const {firebaseAuth} = FirebaseConfig();
    const auth = firebaseAuth;

    const TwitterSignIn = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = TwitterAuthProvider.credentialFromResult(result);
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
            const credential = TwitterAuthProvider.credentialFromError(error);
            // ...
        });
    }

  return (
    <IconButton 
    icon={<BiLogoTwitter size='2em' />} 
    isRound={true}
    onClick={TwitterSignIn}
    ></IconButton>
  )
}
