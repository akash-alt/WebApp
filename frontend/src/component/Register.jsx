import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Register = () => {

  //1st) here have define schema
const [user,setUser] = useState({
  username:"",
  email:"",
  password:""
})
// const history = useHistory()
const navigate = useNavigate();

//* 3rd step define handleInput function
const handelChange = (e) =>{
    let name = e.target.name;
    let value = e.target.value;

    setUser({...user,[name]:value})
}

const handleSubmit= async(e)=>{
  e.preventDefault()

  // object destructuring 
  // Store object in to variable
  const {username,email,password} = user;

  try{

    // it is submitted port 3000 by default which is on front-end
    // submit it on Backend which is on port 8080 
    // so we need "proxy" for connectivity for both front-end and backend

    //let res = await fetch("http://localhost:8080/register",{
      let res = await fetch(`https://mernonline2.herokuapp.com/register`,{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        username,email,password
      })
    })
    console.log(res)

    if(res.status === 400 || !res){
      window.alert("user already exist!")
    }else{
      window.alert("added successfully!")
      navigate("/login")
    }

  }catch(error){
      console.log(error)
  }

}

  return (
    <div>
    <div className="container shadow my-5">
        <div className="row">
          <div
            className="col-md-5 d-flex align-item-center flex-column text-white justify-content-center order-2"
            style={{ background: "#394768"}}
          >
            <h1 className="display-4 fw-bolder text-center">Hello, Folks</h1>
            <p className="lead text-center">Enter Your Details for Register</p>
            <h5 className="mb-4 text-center">OR</h5>
            <Link
              to="/login"
              class="btn btn-outline-primary rounded-pill pb-2 w-50 "
              style={{ position: "relative", left: "8rem",borderColor:'#fff',color:'#fff' }}
            >
              Login
            </Link>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder mb-4">Register</h1>
            <form onSubmit={handleSubmit} type="POST">

            <div class="mb-3">
                <label for="nameß" class="form-label">
                  UserName
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  //* 2nd step
                  name='username'
                  value={user.username}
                  onChange={handelChange}
                  
                />
               
              </div>

              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"

                  //* 2nd step
                  name='email'
                  value={user.email}
                  onChange={handelChange}
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

                  //* 2nd step
                  name='password'
                  value={user.password}
                  onChange={handelChange}
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
              <button type="submit" class="btn btn-outline-primary">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Register