import { Outlet, Navigate } from "react-router-dom";


const AdminProtected = () => {
     const role = localStorage.getItem("role")
     console.log("in the role of the procected is  jsssssss ",role)

    return  role == 'admin' ? <Outlet/> : <Navigate to='/adminLogin'/>
}

export default AdminProtected