import { Link } from 'react-router-dom'
import Logo from './Logo';

function Login(){
    return (
        <div>
          <Logo></Logo>
          <h4> Login Here </h4>
          <p> Welcome to EMSHealth Care System </p>
          
          <Link to="/User">
          
          <div className="d-grid gap-4 col-2 mx-auto">
            <button className="btn btn-primary" type="button">LOGIN</button>
          </div>
          
          </Link >
          
          <Link to="/Create">
          
          <div className="d-grid gap-4 col-2 mx-auto">
          <button className="btn btn-light" type="button">SIGN UP</button>
          </div>
          
          </Link>
          
          <Link to="/Responder">
          
          <div className="d-grid gap-4 col-2 mx-auto">
          <button className="btn btn-danger" type="button">ADMIN & RESPONSER</button>
          </div>
          
          </Link>
        </div>
      );
}

export default Login;