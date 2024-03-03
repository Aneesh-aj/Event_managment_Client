import { Outlet, useNavigate } from "react-router-dom";

const UnprotectedRoute = () => {
    const navigate = useNavigate();
    const role = localStorage.getItem("role");
    console.log(" role from the local storage ",role)

    // if (!role) {
    //     console.log("1")
    //     navigate('/home');
    //     return null;
    // }

    if (role === 'user') {
         console.log("2")
        navigate('/user/home');
        return null;
    }

    if (role === 'admin') {
        navigate('/admin/dashboard');
        return null;
    }

    if (role === 'organizer') {
        navigate('/organizer/profile');
        return null;
    }

    // Default case, navigate to home or handle as needed
   return <Outlet/>
    
}

export default UnprotectedRoute;
