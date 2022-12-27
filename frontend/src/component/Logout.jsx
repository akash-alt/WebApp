import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate()

    const logout = async(req,res) =>{
        try{
            let res = await fetch("/logout",{
                method:'GET',
                headers:{
                    Accecpt:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:'include'

            })
            if(res.status === 401 || !res){
                window.alert("please logout later!")
            }else{
                navigate("/")
                window.location.reload()
            }
        }catch(error){
            console.log(error)
        }
    }
    useEffect( () =>{
        logout()
    },[])

  return (
    <div>

    </div>
  )
}
export default Logout

//************************************************ *//

{/*import React from 'react'

const Logout = () => {

   
        const handleLogout=()=>{
            console.log("called now");
            localStorage.clear();
            window.location.reload();
          }
   

  return (
    <div onClick={handleLogout}>
    Logout
    </div>
  )
}
export default Logout*/}