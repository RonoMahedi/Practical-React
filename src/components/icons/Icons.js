import React from "react";
import {IconContext} from "react-icons";
import {AiFillFacebook, FaReact} from "react-icons/all";

const Icons = () =>{
    return(
       <div>
           <IconContext.Provider value={{color:'red', size:'5rem'}}>
               <FaReact size="10rem"/>
               <AiFillFacebook/>
           </IconContext.Provider>
           <AiFillFacebook color="green" size="20rem"/>
       </div>
    )
}
export default Icons;