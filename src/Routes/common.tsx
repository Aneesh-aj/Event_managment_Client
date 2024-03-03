import { Route, Routes } from "react-router-dom";
import Signup from "../Pages/User/Signup";
import Login from "../Pages/User/Login";
import OrganizerRegistration from "../Pages/OrganizerPages/OrganizerRegistration";
import OrganizerLogin from "../Pages/OrganizerPages/OrganizerLogin";
import AdminLogin from "../Pages/AdminPages/AdminLogin";
import Home from "../Pages/Home";
import UnprotectedRoute from "./protectedRoute/UnprotectedRoute";
import Errorpage from "../Components/404page";

function CommonRoutes() {
    return (
        <>
            <Routes>
                <Route element={<UnprotectedRoute />}>
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/userLogin" element={<Login />} />
                    <Route path="/organizerRegister" element={<OrganizerRegistration/>} />
                    <Route path="/organizerLogin" element={<OrganizerLogin/>} />
                    <Route path="/adminLogin" element={< AdminLogin/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/" element={<Home/>} />
                    <Route path="*" element={<Errorpage/>} />


                </Route>
            </Routes>
        </>
    )
}

export default CommonRoutes