import React,{useState,useEffect} from "react";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Edit = () => {
  const navigate = useNavigate();
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

    const {id} = useParams("");
    console.log(id)
    {/*const [edituser,setEdituser] = useState([])
  console.log(edituser)*/}

    const getData = async (e) => {
      // e.preventDefault()
      let res = await fetch(`https://mernonline2.herokuapp.com/api/getuser/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      if (res.status === 404 || !data) {
        console.log(error);
      } else {
        setInp(data);
       
      }
    };
  
    useEffect(() => {
      getData();
    }, []); 

//* PATCH
  

    const updatedUser = async(e) =>{
      e.preventDefault()
      
      const {name,email,work,mobile,address,desc} = inpval;

      const res2 = await fetch(`https://mernonline2.herokuapp.com/api/updateuser/${id}`,{
        method:"PATCH",
        headers:{
          "Content-Type": "application/json",
        },
        body:JSON.stringify({
          name,email,mobile,address,work,desc
        }) 
      });
      const data2 = await res2.json()
      console.log(data2)
      
      if(res2.status === 422 || !data2){
        alert("data added!")
      }else{
        alert('data has updated!')
        navigate("/dashboard")
      }

    }
  const handleSubmit = () => {};

  return (
    <div>
      <div className="container shadow my-5">
        <div className="col-md-12 p-5">
        <Link to="/dashboard">Dashboard</Link>
        <h6>this is edit page!</h6>
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
              onClick={updatedUser}
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

export default Edit;
