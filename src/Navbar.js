function Navbar() {
  return (
  <div class="nav-grid bg-blue">
    <div id="side1"></div>
    <nav class="navbar">
      <span class="logo-box margin-left-0">
        <li href=" " class="nav_link text-yellow" value="home">
          <h1>LEÓN FENZL</h1>
        </li>
        <h3 class="text-yellow margin-left-1">Game Developer</h3>
      </span>
      <ul class="nav_links">
        <a class="nav_link text-yellow margin-left-3" value="about">About</a>
        <li class="nav_link text-yellow margin-left-3" value="concepts"><h4>Concepts</h4></li>
        <li class="nav_link text-yellow margin-left-3" value="models">
          <h4>Models</h4>
        </li>
        <li class="nav_link text-yellow margin-left-3" value="contact">
          <h4>Contact</h4>
        </li>
      </ul>
    </nav>
    <div id="side2"></div>
  </div>
  );
}

export default Navbar;