import { getAuth } from "firebase/auth/cordova";
import app from "../../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();


    const handleGoogleSignIn = () => {
        console.log('google mama is coming')
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn}>Google login</button>
        </div>
    );
};

export default Login;