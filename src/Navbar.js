const Navbar = () => {
  let link = "www.google.com";
  return (
    <div className="Navbar">
      <h1>BLOG</h1>
      <a href={link}>Google landing page</a>
      <a href="/">Google landing</a>
    </div>
  );
};

export default Navbar;
