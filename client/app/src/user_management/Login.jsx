import React, { useState, useEffect } from 'react';
import '../CSS/login.css'
import '@fortawesome/fontawesome-free/css/all.css';
import {useUser} from '../services/userService';

const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [role, setRole] = useState();
    const [name, setName] = useState();
    const{signupUser}=useUser();
    const createAccount = () => {
        const data = { email, password, role, name };
     signupUser(data);
    };
    useEffect(() => {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');
        const handleSignUp = () => {
                container.classList.add("right-panel-active");
             setIsSignUp(true);
            
        };
        
        const handleSignIn = () => {
             container.classList.remove("right-panel-active");
                setIsSignUp(false);
            
        };
        
        signUpButton.addEventListener('click', handleSignUp);
        signInButton.addEventListener('click', handleSignIn);

        return () => {
            signUpButton.removeEventListener('click', handleSignUp);
            signInButton.removeEventListener('click', handleSignIn);
        };
    }, []);

    

    return (
        <>
            <div className="container" id="container">
                <div className={`form-container ${isSignUp ? 'sign-up-container' : 'sign-in-container'}`}>
                    <form action="#">
                        {isSignUp ? (
                            <>
                                <h1>Create Account</h1>
                                <div className="social-container">
                                    <a href="#" className="social fcolorful"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#" className="social gcolorful"><i className="fab fa-google"></i></a>
                                    <a href="#" className="social lcolorful"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                                <span>or use your email for registration</span>
                                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <div className="custom-select">
                                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                                        <option value="" disabled selected hidden>Choose Role...</option>
                                        <option value="Student">Student</option>
                                        <option value="Mentor">Mentor</option>
                                    </select>
                                </div>

                                <button className='loginBtn' id='signUpBtn' onClick={createAccount}>Sign Up</button>
                            </>
                        ) : (
                            <>
                                <h1>Sign in</h1>
                                <div className="social-container">
                                    <a href="#" className="social fcolorful"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#" className="social gcolorful"><i className="fab fa-google"></i></a>
                                    <a href="#" className="social lcolorful"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                                <span>or use your account</span>
                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Password" />
                                <a href="#">Forgot your password?</a>
                                <button className='loginBtn' id='signInBtn'>Sign In</button>
                            </>
                        )}
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;