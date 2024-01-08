import {React, useContext, useState} from 'react';
import './LoginPage.scss';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../context/authContext";


const LoginPage = () => {
  document.title = "Code Posts - Log In";

  const { login } = useContext(AuthContext);

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      await login(inputs);
      navigate('/mainFeed/pubFeed');
    }
    catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div className="mylogin">
      <div className="mycard">
        <div className="myleft">
          <h1>Welcome Back.</h1>
          <p>
            Pick up where you left off. Programmers never sleep you know?
          </p>
          <span>Don't have an account?</span>
          <Link to="/signUpPage">
            <button>Sign Up</button>
          </Link>
          <Link to="/">
            <button>Welcome Page</button>
          </Link>
        </div>
        <div className="myright">
          <h1>Login</h1>
          <form>
            <input type="text" name='username' placeholder="Username" onChange={handleChange}/>
            <input type="password" name='password' placeholder="Password" onChange={handleChange}/>
            {err && err}
            <button onClick={handleLogin}>Log In</button>
          </form>
        </div>
      </div>
    </div>
  )
};

export default LoginPage;