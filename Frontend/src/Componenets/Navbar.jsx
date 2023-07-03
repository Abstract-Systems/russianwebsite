import './Navbar.css';

const Navbar = ({ title, text, color }) => {
  return (
    <nav className="navbar" style={{ backgroundColor: color }}>
      <div className="navbar-title">{title}</div>
      <div className="navbar-text">{text}</div>
    </nav>
  );
};

export default Navbar;
