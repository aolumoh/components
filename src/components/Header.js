function Header() {
  return (
    <header className="flex space-between">
      <h1><a href="#">TieTheKnot</a></h1>
      <nav>
        <ul class="flex">
          <li><a href="#">Projects</a></li>
          <li><a href="#">About me</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;