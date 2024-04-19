import React from 'react'
import './SignUp.css';

const SignUp = () => {
  return (
    <div className="container">
            <div className="signupBox">
                <h2>Sign Up</h2>
                <form>
                    <div className="userBox">
                        <input type="text" name="username" required />
                        <label>Username</label>
                    </div>
                    <div className="userBox">
                        <input type="email" name="email" required />
                        <label>Email</label>
                    </div>
                    <div className="userBox">
                        <input type="password" name="password" required />
                        <label>Password</label>
                    </div>
                    <button type="submit" className="submitBtn">Submit</button>
                </form>
            </div>
        </div>
  )
}

export default SignUp
