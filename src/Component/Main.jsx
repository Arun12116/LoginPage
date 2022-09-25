import React from 'react'
import { FaGooglePlusG, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const Main = () => {
    return (
        <>

            <div className="main">

                <main className='outer-Page'>
                    <div className="inner-Page">

                        <div className="login-page">
                            <div className="logo">
                                <p><span>Company</span>Name</p>
                            </div>
                            <div className="login-main">

                                <div className="heading">
                                    <h2>Sign in to Account</h2>
                                    <div className="line1">
                                        <hr />
                                    </div>
                                    <div className="icon">
                                        <li><FaFacebookF /></li>
                                        <li><FaLinkedinIn /></li>
                                        <li><FaGooglePlusG /></li>
                                    </div>
                                    <div className="pargarph">
                                        <p>or use your email account</p>
                                    </div>
                                    {/* <fieldset> */}
                                    {/* <legend>Email</legend> */}
                                    <div className="inputebox">


                                        <div className="email">
                                            <input type="text" />
                                        </div>

                                        {/* </fieldset> */}
                                        <div className="password">
                                            <input type="text" placeholder='password' />
                                        </div>
                                    </div>

                                    <div className="side1">
                                        <input type="checkbox" />
                                        <p>Remember me</p>
                                        <p>forgot password?</p>
                                    </div>
                                    <div className="btn">
                                        <div className="Sign">
                                            <button>Sign In</button>
                                        </div>
                                    </div>

                                    <div className="footer">
                                        <p>privacy policy</p>
                                        <li></li>
                                        <p>Term & Condition</p>
                                    </div>
                                </div>




                            </div>
                        </div>


                        <div className="sin-Up-Page">
                            <div className="headind2">
                                <h2>Hello, Friend!</h2>

                            </div>
                            <div className="line">
                                <hr />
                            </div>
                            <div className="para">
                                <p>Fill up personal information and   <span>start joureny with us. </span> </p>
                            </div>
                            <div className="btn2">
                            <button>Sign Up</button>
                            </div>
                            

                        </div>


                    </div>



                </main>
            </div>
        </>
    )
}

export default Main