import { Link } from 'react-router-dom'
import Logo from './Logo';

function Responder() {

    return (
        <>
        <Logo></Logo>
        <h4> Responder </h4>
        <input type="email" placeholder="Email" /><br /> <br />
        <input type="password" placeholder="Password" /> <br /> <br />
        <Link to="/">
        <div className="d-grid gap-2 col-2 mx-auto">
          <button className="btn btn-primary" type="button"> LOGIN </button>
        </div>
        </Link>
        <Link to="/">
        <div className="d-grid gap-2 col-2 mx-auto">
          <button className="btn btn-danger" type="button"> ADMIN </button>
        </div>
        </Link>
        </>
    );
}

export default Responder;