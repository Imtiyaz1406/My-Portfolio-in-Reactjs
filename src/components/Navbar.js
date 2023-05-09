import {Link} from 'react-router-dom'
function Navbar(){
    return(
      <div className="nav">
        <Link to="/" className="logo">IMB</Link>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Projects">My Projects</Link>
        <Link to="/Education">Education</Link>
        <Link to="/Info">Personal Info</Link>
      </div>
    )
}
export default Navbar;