    import React, { useState, useEffect } from 'react';
    import './login.css';
    import '@fortawesome/fontawesome-free/css/all.css';


    const Login = () => {
        const [isSignUp, setIsSignUp] = useState(false);

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

            const handleLogin = () => {
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
                                    <input type="text" placeholder="Name" />
                                    <input type="email" placeholder="Email" />
                                    <input type="password" placeholder="Password" />
                                    <button>Sign Up</button>
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
                                    <button>Sign In</button>
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