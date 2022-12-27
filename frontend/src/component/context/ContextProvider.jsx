import React, { createContext,useState } from 'react';


export const addData = createContext("");
 
const ContextProvider = ({children}) => {
  const [cdata,setCdata] = useState("");

  return (
    <addData.Provider value={{cdata,setCdata}}>
        {children}
    </addData.Provider>
  )
}

export default ContextProvider
