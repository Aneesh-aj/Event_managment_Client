import { Route, Routes } from "react-router-dom"
import UserProcted from "./protectedRoute/UserProtect"
import Home from "../Pages/Home"
import Errorpage from "../Components/404page"


function UserRoute (){
    return (
        <Routes>
             <Route element={<UserProcted/>}>
                    <Route path="/home" element={<Home/>} />
                    <Route path="*" element={<Errorpage/>} />
             </Route>
        </Routes>
    )
}

export default UserRoute

