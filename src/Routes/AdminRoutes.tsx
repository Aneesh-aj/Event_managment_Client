import { Route, Routes } from "react-router-dom"
import AdminRequest from "../Pages/AdminPages/AdminRequest"
// import AdminLogin from "../Pages/AdminPages/AdminLogin"
import RequestDetails from "../Pages/AdminPages/RequestDetails"
import AdminProtected from "./protectedRoute/AdminProctedRoute"
import Errorpage from "../Components/404page"



function AdminRoutes() {
    return (
        <>
            <Routes>
                <Route element={<AdminProtected/>}>
                    <Route path="/Requests" element={<AdminRequest />} />
                    {/* <Route path="/login" element={< AdminLogin/>} /> */}
                    <Route path="/RequestDetails" element={<RequestDetails />} />
                    <Route path="*" element={<Errorpage/>} />

                </Route>

            </Routes>

        </>
    )
}

export default AdminRoutes