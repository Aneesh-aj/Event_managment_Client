import { Outlet, Navigate } from "react-router-dom";


const UserProcted = () => {
     const role = localStorage.getItem("role")
     console.log("in the role of the procected is  jsssssss ",role)

    return  role == 'user' ? <Outlet /> : <Navigate to='/signup' />
}

export default UserProcted;