import { Link } from 'react-router-dom'
import Logo from './Logo';


function Create(){

    return (
        <div>
          <Logo></Logo>
          <h4> Create Account </h4>
          <input type="text" placeholder="Name" /><br /> <br />
          <input type="email" placeholder="Email" /><br /> <br />
          <input type="password" placeholder="Password" /> <br /> <br />
          <Link to="/">
          <div className="d-grid gap-2 col-2 mx-auto">
          <button className="btn btn-primary" type="button"> SIGN UP </button>
          </div>
          </Link>
          <h6>Already have an account? <a href>Login</a></h6>
        </div>
    );

    }

export default Create;