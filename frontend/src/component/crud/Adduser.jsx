import React,{useState,useContext} from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { addData } from "../context/ContextProvider";

const Adduser = () => {
  const navigate = useNavigate();

  const {cdata,setCdata} = useContext(addData);
    //* imp for define schema
    const [inpval,setInp] = useState({
        name:"",
        email:"",
        mobile:"",
        work:"",
        address:"",
        desc:""
        
    })

    const handleInput = (e) =>{
       console.log(e.target.value)
       let name = e.target.name;
       let value = e.target.value;

      {/** setInp((prevalue) =>{
         return{
           ...prevalue,[name]:value
         }
       })*/} 
       setInp({...inpval,[name]:value}) // here what value will enter it will store here
    }

  //* calling API
    const handleAdd = async(e) =>{
      e.preventDefault()

      const {name,email,mobile,work,address,desc} = inpval;

      let res = await fetch(`https://mernonline2.herokuapp.com/api/add`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(
          {name,email,mobile,work,address,desc}
        )
      })

      const data = await res.json()
      console.log(data);

      if (res.status === 422 || !data) {
        alert("error! check input field")
      }else{
         alert("data has added succefully!")
        // setCdata(data)
        navigate("/dashboard")
      }

    }
    // this is form
  const handleSubmit = () => {};
  return (
    <div>
      <div className="container shadow my-5">
        <div className="col-md-12 p-5">
        <Link to="/dashboard">Dashboard</Link>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputEmail1" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputText"
                  aria-describedby="emailHelp"
                  name="name"
                  value={inpval.name}
                  onChange={handleInput}
                 
                />
              </div>
              <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" class="form-label">
                 Email
                </label>
                <input
                  type="Email"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="email"
                  value={inpval.email}
                  onChange={handleInput}
                />
              </div>
              {/**<div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" class="form-label">
                 Age
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="age"
                  value={inpval.age}
                  onChange={handleInput}
                />
  </div>**/}
              <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" class="form-label">
                  Mobile
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="mobile"
                  value={inpval.mobile}
                  onChange={handleInput}
                />
              </div>

              <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" class="form-label">
                  Work
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="work"
                  value={inpval.work}
                  onChange={handleInput}
                />
              </div>

              <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" class="form-label">
                  Address
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="address"
                  value={inpval.address}
                  onChange={handleInput}
                />
              </div>
              <div class="mb-3 col-lg-6 col-md-6 col-12">
              <label for="floatingTextarea">Desc</label>
              <textarea 
              class="form-control" 
              placeholder="Leave a comment here" 
              id="floatingTextarea"
              name="desc"
              value={inpval.dsc}
              onChange={handleInput}
              
              ></textarea>
              </div>
             
              <button 
              type="submit" 
              class="btn btn-primary"
              onClick={handleAdd}
              method="POST"
              >
                ADD
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Adduser;
