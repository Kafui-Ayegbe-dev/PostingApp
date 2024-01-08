import React, {useState} from "react";
import './SignUpPage.scss';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";



function SignUpPage() {
  document.title = "Code Posts - Sign Up";

  localStorage.clear();


  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    verifyPassword: "",
    level: "",
  });

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if(inputs.verifyPassword !== inputs.password){
      alert("Passwords don't match");
      return;
    }
    
    try {
      await axios.post("http://localhost:8081/api/auth/signup", inputs);
      alert('Sign Up Successful');
      navigate('/loginPage');
    } catch (error) {
      setErr(err.response.data);
    }
  };




  return (
    <div className="mylogin">
      <div className="mycard">
      <div className="myright">
          <h1>Sign Up</h1>
          <form>
            <input type="text" name="username" placeholder="Username" onChange={handleChange} />

            <input type="password" name="password" placeholder="Password" onChange={handleChange} />

            <input type="password" name="verifyPassword" placeholder="Verify password"  onChange={handleChange}/>

            <label htmlFor="experience">Select Experience Level</label>
            <select id="experience" style={{cursor: 'pointer'}} onChange={handleChange} name="level">
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
            </select>
            {err && err}
            <Link to="/logInPage">
              <button onClick={handleSubmit}>Sign Up</button>
            </Link>
          </form>
        </div>
        <div className="myleft2">
          <h1>Code Posts</h1>
          <p>
            Got more to say? We wouldn't have it any other way. Keep the interaction going with members of the communiy old and new.
          </p>
          <span>Already have an account?</span>
          <Link to="/logInPage">
            <button>Log In</button>
          </Link>
          <Link to="/">
            <button>Welcome Page</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
