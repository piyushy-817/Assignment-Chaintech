import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    
  <Link className="navbar-brand " to="/" >My Accounts Manager 📃</Link>
  </div>
</nav>
      
    </div>
  );
};

export default Header;
