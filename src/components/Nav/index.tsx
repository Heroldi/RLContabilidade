import React from "react";
import { Link} from "react-router-dom";
import { NavSC } from "./style";

export default  function NavBar() {
    return(
       <NavSC> 
            <Link to="/" >Home</Link>
            <Link to="/add" >Adicionar</Link>
            <Link to="/register" >Registro</Link>      
       </NavSC>
    );
}
