import { Route, Routes } from "react-router-dom";
// import OrganizerRegistration from "../Pages/OrganizerPages/OrganizerRegistration";
import OrganizerProfile from "../Pages/OrganizerPages/OrganizerProfile";
import Errorpage from "../Components/404page";
// import OrganizerLogin from "../Pages/OrganizerPages/OrganizerLogin";

function OrganizerRoutes() {
    return (
        <>
            <Routes>
                {/* <Route path="/Registration" element={<OrganizerRegistration />} /> */}
                <Route path="/profile" element={<OrganizerProfile/>} />
                {/* <Route path="/Login" element={<OrganizerLogin/>} /> */}
                <Route path="*" element={<Errorpage/>} />
            </Routes>
        </>
    )
}

export default OrganizerRoutes