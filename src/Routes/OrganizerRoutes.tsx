import { Route, Routes } from "react-router-dom";
import OrganizerRegistration from "../Pages/OrganizerPages/OrganizerRegistration";
import OrganizerProfile from "../Pages/OrganizerPages/OrganizerProfile";
import OrganizerLogin from "../Pages/OrganizerPages/OrganizerLogin";

function OrganizerRoutes() {
    return (
        <>
            <Routes>
                <Route path="/Registration" element={<OrganizerRegistration />} />
                <Route path="/profile" element={<OrganizerProfile/>} />
                <Route path="/Login" element={<OrganizerLogin/>} />
            </Routes>
        </>
    )
}

export default OrganizerRoutes