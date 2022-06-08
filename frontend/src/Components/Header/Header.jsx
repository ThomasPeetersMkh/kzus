import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <h1 className="header__title">
          <Link to={"/"}>Uitleensysteem</Link>
        </h1>
        <nav className="header__nav">
          <ul className="header__nav__list">
            <li className="header__nav__list__item">
              <Link to={"/artikelen"}>Alle Artikelen</Link>
            </li>
            <li className="header__nav__list__item">
              <Link to={"/artikelen/scholen"}>Per School</Link>
            </li>
            <li className="header__nav__list__item">
              <Link to={"/artikelen/mijnartikelen"}>Mijn Artikelen</Link>
            </li>
            <li className="header__nav__list__item">Uitloggen</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
