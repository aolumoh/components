function Header() {
  return (
    <header className="flex space-between">
      <h1><a href="#">TieTheKnot</a></h1>
      <nav>
        <ul className="flex">
          <li><a href="#">Services</a></li>
          <li><a href="#">Our Story</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;