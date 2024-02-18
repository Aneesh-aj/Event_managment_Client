import React, { useEffect, useState } from "react";

const  Nav:React.FC = ()=> {
    const [navstate, setNavState] = useState<boolean>(true);

    useEffect(() => {
        if (
            window.location.pathname === "/user/Login" ||
            window.location.pathname === "/user/Signup" ||
            window.location.pathname === "/organizer/Registration" ||
            window.location.pathname === "/orgnaizer/Login"||
            window.location.pathname === "/Admin/Login" 
        ) {
            setNavState(false);
        } else {
            setNavState(true);
        }
    }, []);

    return (
        <>
            {!navstate ? null : (
                <div className="w-full bg-white h-14 relative shadow-md rounded-xl p-3">
                    <h1 className="font-sans text-2xl ps-2 font-bold">EvenTo</h1>
                </div>
            )}
        </>
    );
}

export default Nav;
