import {  Route, Routes } from "react-router-dom";
import Signup from "../Pages/User/Signup";
import Login from "../Pages/User/Login";

function UserRoutes(){
    return(
        <>
             <Routes>
                <Route path="/Signup" element={<Signup/>}   />
                <Route path="/Login" element={<Login/>}   />

             </Routes>
        </>
    )
}

export default UserRoutes