import React, { useEffect, useState, useContext } from "react";
// import Header from "./sidebar/Header";
import { AiFillEye } from "react-icons/ai";
import { FaPen } from "react-icons/fa";
import { MdDelete, MdAddBox } from "react-icons/md";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { addData } from "./context/ContextProvider";

const Dashboard = () => {
  const [getuserdata, setUserData] = useState([]);
  console.log(getuserdata);
  const { cdata, setCdata } = useContext(addData);

  //* calling API
  const getData = async (e) => {
    // e.preventDefault()
    let res = await fetch(`https://mernonline2.herokuapp.com/api/get`, {
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
      setUserData(data);
      console.log("data getting on dashboard!");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  //* Delete

  const deleteClick = async (id) => {
    const res2 = await fetch(`https://mernonline2.herokuapp.com/api/deleteuser/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const deleteuser = await res2.json();
    console.log(deleteuser);

    if (res2.status === 422 || !deleteuser) {
      console.log("user has deleted");
    } else {
      console.log("user has deleted!");
      getData();
    }
  };

  return (
    <div>
      {/** <Header/> */}

      <div className="container">

      {cdata ? (
        <div>
          <div
            class="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>Added Successfully</strong> Record
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </div>
      ) : (
        ""
      )}
        <div className="row my-5 py-5">
          <h3 className="py-2 shadow">
            Dashboard
            <Link
              to="/add"
              class="btn btn-outline-success"
              style={{ marginLeft: "62rem" }}
            >
              Add New Record
            </Link>
          </h3>
          <table class="table my-4">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Contact</th>
                <th scope="col">Work</th>
                <th scope="col">Address</th>
                <th scope="col">Desc</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {getuserdata.map((dash, id) => {
                return (
                  <>
                    <tr>
                      <th scope="row">{id + 1}</th>
                      <td>{dash.name}</td>
                      <td>{dash.email}</td>
                      <td>{dash.mobile}</td>
                      <td>{dash.work}</td>
                      <td>{dash.address}</td>
                      <td>{dash.desc}</td>
                      <td className="d-flex  justify-content-between">
                        <Link to={`/view/${dash._id}`}>
                          <button class="btn btn-outline-success">
                            <AiFillEye />
                          </button>
                        </Link>
                        <Link to={`/edit/${dash._id}`}>
                          <button class="btn btn-outline-primary">
                            <FaPen />{" "}
                          </button>
                        </Link>

                        <button
                          class="btn btn-outline-danger"
                          onClick={() => deleteClick(dash._id)}
                        >
                          <MdDelete />
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
