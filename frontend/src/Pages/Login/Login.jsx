import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../data/loginApi";
import store from "../../data";
import userSlice from "../../data/user";
import { useCookies } from "react-cookie";

const Login = () => {
  const navigate = useNavigate();
  const [loginUser] = useLoginMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [cookies, setCookie, removeCookie] = useCookies(["BEARER"]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const { data } = await loginUser({ email, password });
      store.dispatch(userSlice.actions.login(data));
      setCookie("BEARER", data.token, {
        httpOnly: true
      });
      navigate("/");
    } catch {
      window.alert("Dit zijn geen geldige logingegevens");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="login">
        <div className="login__box">
          <img
            src="/assets/kobaz.png"
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
            <button className="login__box__form__button" disabled={isLoading}>
              Aanmelden
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
