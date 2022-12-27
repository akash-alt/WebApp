import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {


  const [user,setUser] = useState({
      email:"",
      password:""
  })

  const handleInput = (e)=>{
      let name = e.target.name;
      let value = e.target.value
      setUser({...user,[name]:value})
  }

  const handleSubmit = async(e) =>{
      e.preventDefault()

      const {email,password} = user;

      try{
        // let res = await fetch("http://localhost:8080/login",{
          let res = await fetch(`https://mernonline2.herokuapp.com/login`,{
          method:'POST',
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify({
            email,password
          })
        })
        if(res.status === 400 || !res){
          window.alert("invalid credential!")
        }else{
          window.alert("login successfully!")
          // history.pushState("/login")
          window.location.reload()
        }

      }catch(error){
          console.log(error)
      }
  }

  //** login
  const navigate = useNavigate();
  const loginDash = () =>{
      localStorage.setItem('login',true)
      navigate("/")
  }
  useEffect(() =>{
    const login = localStorage.getItem('login')
    if(login){
      navigate("/")
    }
  })

  return (
    <div>
      <div className="container shadow my-5">
        <div className="row">
          <div
            className="col-md-5 d-flex align-item-center flex-column text-white justify-content-center"
            style={{ background: "#394768"}}
          >
            <h1 className="display-4 fw-bolder text-center">Welcome Back </h1>
            <p className="lead text-center">Enter Your Credential To login</p>
            <h5 className="mb-4 text-center">OR</h5>
            <Link
              to="/register"
              class="btn btn-outline-primary rounded-pill pb-2 w-50 "
              style={{ position: "relative", left: "8rem",borderColor:'#fff',color:'#fff' }}
            >
              Register
            </Link>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder mb-4">Login</h1>
            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  //*
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                I agree to the terms and conditions 
                </label>
              </div>
              <button 
              type="submit" 
              class="btn btn-primary"
                onClick={loginDash}
              >
               Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
