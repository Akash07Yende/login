import { Link } from 'react-router-dom'

function Restore() {
    return (
        <div>
        <div ClassName="mid">
        <h4> Restore Password </h4>
        <img src="demon.jpg" alt="" />
        <input type="email" placeholder="E-mail address" />
        <p>You will receive email with password reset link. </p>
        </div>
        <Link to="/">
        <div className="d-grid gap-2 col-2 mx-auto">
        <button className="btn btn-primary" type="button">SEND INSTRUCTIONS</button>
        </div>
        </Link>
        </div>
      
        
         
    );
}

export default Restore;