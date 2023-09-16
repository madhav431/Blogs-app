import { Link } from "react-router-dom";

const Navbar = () => {
  //let link = "www.google.com";
  return (
    <div className="Navbar">
      <h1>WEB NINJA BLOGS</h1>
      <Link to="/" style={{ textDecoration: 'none' }}>Home</Link >
      <Link to="/create" style={{ textDecoration: 'none' }}>New Blog</Link>
    </div>
  );
};

export default Navbar;
