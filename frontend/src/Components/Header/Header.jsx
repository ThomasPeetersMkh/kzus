import { Link } from "react-router-dom";
import { useLogoutMutation } from "../../data/loginApi";
import { useNavigate } from "react-router-dom";
import { useGetAllSchoolsQuery } from "../../data/schoolApi";
import { useGetAllCategoriesQuery } from "../../data/categoryApi";

const Header = () => {
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();

  const { data, isError, isLoading } = useGetAllSchoolsQuery();
  const {
    data: categories,
    isError: categoryError,
    isLoading: categoryLoading
  } = useGetAllCategoriesQuery();

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
              <div className="header__nav__list__item__dropdown">
                {categories &&
                  categories["hydra:member"].map((category) => {
                    const back = category.name
                      .split(" ")
                      .join("-")
                      .toLowerCase();
                    return (
                      <li>
                        <Link to={`/artikelen/categorieen/${back}`}>
                          {category.name}
                        </Link>
                      </li>
                    );
                  })}
              </div>
            </li>
            <li className="header__nav__list__item">
              <Link to={"/artikelen/scholen"}>Per School</Link>
              <div className="header__nav__list__item__dropdown">
                {data &&
                  data["hydra:member"].map((school) => {
                    const back = school.name.split(" ").join("-").toLowerCase();
                    return (
                      <li>
                        <Link to={`/artikelen/scholen/${back}`}>
                          {school.name}
                        </Link>
                      </li>
                    );
                  })}
              </div>
            </li>
            <li className="header__nav__list__item">
              <Link to={"/artikelen/mijnartikelen"}>Mijn Artikelen</Link>
            </li>
            <li className="header__nav__list__item">
              <button
                className="header__nav__list__item__button"
                onClick={async () => {
                  await logout();
                  navigate("/login");
                }}
              >
                Afmelden
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
