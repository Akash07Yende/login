import { Link } from 'react-router-dom'
import './User.css'
import logo from './logo2.svg';
import Logo from './Logo';


function User_Login() {
    return (
        <div>
          <Logo></Logo>
          <img src={logo}/>
          <h4> User Login </h4>
          <input type="email" placeholder="Email" required="email"/> <br /> <br />
          <input type="password" placeholder="Password" required/> <br />
          <Link to="/Responder">
          <button type="button" className="btn" id="fyp">Forgot Your Password</button>
          </Link>
          <Link to="/">
          <div className="d-grid gap-2 col-2 mx-auto">
            <button className="btn btn-primary" type="button">LOGIN</button>
          </div>
          </Link>
          <h6>Don't have any account ? <Link to="/Create">
          <button type="button" className="btn" id='su'>Sign Up</button> </Link> </h6>

        </div>
      );
}

export default User_Login;