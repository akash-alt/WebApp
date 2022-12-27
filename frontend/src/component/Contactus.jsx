import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

const Contactus = () => {
  const navigate = useNavigate()

  const[msg,setMsg] = useState({
    name:"",
    email:"",
    message:""
  });

  const handleInput = (e) =>{
    let name = e.target.name;
    let value = e.target.value;

    setMsg({...msg,[name]:value})
}

const handleSubmit= async(e)=>{
  e.preventDefault()

  // object destructuring 
  // Store object in to variable
  const {name,email,message} = msg;

  try{

    // it is submitted port 3000 by default which is on front-end
    // submit it on Backend which is on port 8080 
    // so we need "proxy" for connectivity for both front-end and backend

    // let res = await fetch("http://localhost:8080/message",{
      let res = await fetch(`https:/mernonline2.herokuapp.com/message`,{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name,email,message
      })
    })
    console.log(res)

    if(res.status === 400 || !res){
      window.alert("message not deliverd,try again!")
    }else{
      window.alert("Message sent successfully!")
      // history.pushState("/login")
      navigate("/")
      setMsg({
        name:"",
        email:"",
        message:""

      })
    }

  }catch(error){
      console.log(error)
  }

}


  return (
    <div>
      <section id="contactus">
        <div className="container my-5 py-5">
          <div className="row ">
            <div className="col-12">
              <h3 className="fs-5 text-center"> Contact Us</h3>
              <h1 className="display-6 text-center">Have Some Question?</h1>
              <hr className="w-25 mx-auto" />
            </div>

            <div className="col-md-6">
              <img
                className="w-75 mt-1"
                src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?t=st=1656416154~exp=1656416754~hmac=f6005e70b1515ec7fbe700c539567302518695ed1ae6bccc12168504e69513b9&w=740"
                alt="contactus"
              />
            </div>
            <div className="col-md-6 mt-5 ">

              <form onSubmit={handleSubmit} method="POST">
              <div class="form-group mt-2">
              <label for="exampleInputName">Name</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputName"
                placeholder="Name"
                name="name"
                value={msg.name}
                onChange={handleInput}
              />
            </div>

                <div class="form-group mt-2">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    name="email"
                    value={msg.email}
                    onChange={handleInput}
                  />
                </div>

                <div class="form-group mt-2">
                  <label for="exampleInputMessage">Your Message</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    placeholder="Message"
                    name="message"
                    value={msg.message}
                    onChange={handleInput}
                  >
                    Messages
                  </textarea>
                </div>

                <button type="submit" class="btn btn-outline-primary mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactus;
