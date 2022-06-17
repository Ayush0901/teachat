import React from "react";
import { FacebookLoginButton,GoogleLoginButton } from "react-social-login-buttons";
import "firebase/app";
import Footer from "./Footer";
import { auth } from "../firebase";
import firebase from "firebase/app";

const Login = () => {
    return (
        <div>
        <div id="login-page">
            <div id="login-card">
                <h2>Welcome to Teachat!</h2>

                <div className="login-button">
                    <GoogleLoginButton onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}/>
                </div>

                <br /> <br />

                <div className="login-button">
                    <FacebookLoginButton onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())} />
                </div>
            </div>
        
           
        </div>
        <Footer/>
        </div>

    );
}

export default Login;