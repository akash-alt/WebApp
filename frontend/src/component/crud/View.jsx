import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { BsFillPersonFill } from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import { MdDelete, MdAddBox } from "react-icons/md";
import { useParams } from "react-router-dom";
import { Link,useNavigate } from "react-router-dom";

const View = () => {
  const navigate = useNavigate();
  const { id } = useParams("");
  console.log(id);

  const [getuser, setGetuser] = useState([]);
  console.log(getuser);

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
      setGetuser(data);
      console.log("data getting on dashboard!");
    }
  };

  useEffect(() => {
    getData();
  }, []);

   //* Delete
   const deleteClick = async(id) =>{
    const res2 = await fetch(`https://mernonline2.herokuapp.com/api/deleteuser/${id}`,{
        method:"DELETE",
        headers:{
          "Content-Type": "application/json",
        }
      });
      const deleteuser = await res2.json()
      console.log(deleteuser)
      if(res2.status === 422 || !deleteuser){
        console.log("user has deleted")
      }else{
        console.log("user has deleted!")
        getData()
        navigate("/dashboard")
      }
  }


  return (
    <div className="container mt-5 mb-5">
      <h1 style={{ fontWeight: 400 }}>Welcome to Weenggs</h1>
      <Card sx={{ maxWidth: 500 }}>
        <CardContent className="mt-5 ">
          <div className="row">
            <div className="left_view col-lg-6 col-md-6 col-12 mb-5 pb-5">
              <span>
                <BsFillPersonFill />
              </span>
              <h5 className="mt-4">
                Name: <span>{getuser.name}</span>
              </h5>
              {/**  <h5>
                Age: <span style={{ fontWeight: 300 }}>24</span>
              </h5>*/}
              <p>
                Email: <span>{getuser.email}</span>
              </p>
              <p>
                {" "}
                Role:<span>{getuser.work}</span>
              </p>
            </div>

            <div className="right_view col-lg-6 col-md-6 col-12">
              <div className="add_btn ">
                <Link to={`/edit/${getuser._id}`}>
                  <button
                    class="btn btn-outline-primary "
                    style={{ marginRight: "12px" }}
                    
                  >
                    <FaPen />{" "}
                    
                  </button>
                </Link>
                
                  <button 
                  class="btn btn-outline-danger"
                  onClick={() =>deleteClick(getuser._id)}
                  >
                    <MdDelete />
                  </button>
               
              </div>
              <p className="mt-4">
                Mobile:{" "}
                <span style={{ fontWeight: 300 }}>{getuser.mobile}</span>
              </p>
              <p className="mt-4">
                Location:{" "}
                <span style={{ fontWeight: 300 }}>{getuser.address}</span>
              </p>
              <p className="mt-4">
                Desc: <span>{getuser.desc}</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default View;
