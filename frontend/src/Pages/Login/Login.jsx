import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("logging in");
    navigate("/");
  };

  return (
    <>
      <div className="login">
        <div className="login__box">
          <img
            src="../../assets/kobaz.png"
            alt="koba Zuiderkempen logo"
            className="login__box__image"
          ></img>
          <form action="" className="login__box__form" onSubmit={handleSubmit}>
            <div className="login__box__form__input">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="login__box__form__input__email"
                onChange={(e) => {
                  console.log(e.target.value);
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="login__box__form__input">
              <label htmlFor="password">Wachtwoord:</label>
              <input
                type="password"
                name="password"
                placeholder="Wachtwoord"
                className="login__box__form__input__password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button>Click Me</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
