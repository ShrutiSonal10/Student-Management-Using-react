import React from 'react';
import { Link} from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import './LoginAdmin.css';

const LoginAdmin = () => {
  return (
    <div className="wrapper">
        <form action="">
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder='Username' required />
                <FaUser className="icon" />
            </div>
            <div className="input-box">
                <input type="password" placeholder='Password' required />
                <FaLock className="icon" />
            </div>
            <div className="remember-forgot">
                <label><input type="checkbox" />Remember me</label>
                <a href="#">Forgot Password</a>
            </div>
            <button type="submit">logIn</button>
            <div className="register-link">
                <p>Don't have and account?<a href="#">Register</a></p>
            </div>
            <div>
            <Link  to="/" style={{ color: "white" }}>Login as Teacher</Link>
            </div>
        </form>
    </div>
  )
}
export default LoginAdmin;