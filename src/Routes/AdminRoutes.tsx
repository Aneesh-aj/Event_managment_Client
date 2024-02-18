import { Route, Routes } from "react-router-dom"
import AdminRequest from "../Pages/AdminPages/AdminRequest"
import AdminLogin from "../Pages/AdminPages/AdminLogin"
import RequestDetails from "../Pages/AdminPages/RequestDetails"



function AdminRoutes(){
    return(
        <>
            <Routes>
                <Route path="/Requests" element={<AdminRequest/>}/>
                <Route path="/login" element={< AdminLogin/>} />
                <Route path="/RequestDetails" element={<RequestDetails/>} />
            </Routes>

        </>
    )
}

export default AdminRoutes