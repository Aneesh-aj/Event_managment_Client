import React from "react";
const  AdminRequest: React.FC =()=> {
  return (
    <div className="w-full h-96 p-4 flex  flex-col items-center ">
      <div className="rounded-md bg-white shadow-md  w-full h-11 flex flex-row items-center">
        <h2 className=" font-sans font-bold ps-5 ">Organization Request</h2>
      </div>
      <div className="rounded-md mt-1 w-11/12 h-11 flex  items-center">
        <div className="w-6/12 flex justify-center">Pending</div>
        <div className="w-6/12 flex justify-center">Accept</div>
      </div>
      <div className="rounded-md bg-white mb-1 shadow-md mt-1 w-11/12 h-9 flex border  items-center">
        <div className="w-4/12 flex justify-center">Owner name</div>
        <div className="w-4/12 flex justify-center">Email</div>
        <div className="w-4/12 flex justify-center">Company name</div>
        <div className="w-4/12 flex justify-center"></div>
      </div>
      <div className="rounded-md bg-white shadow-md  mt-2 w-11/12 h-12 flex flex-row items-center">
        <div className="w-4/12 flex justify-center">Aneesh</div>
        <div className="w-4/12 flex justify-center">aneesh@gmail.com</div>
        <div className="w-4/12 flex justify-center">Evpss Evenetts </div>
        <div className="w-4/12 flex justify-center"><button className="bg-blue-600 text-white  w-16 rounded">View</button></div>
      </div>
      <div className="rounded-md bg-white shadow-md  mt-2 w-11/12 h-12 flex flex-row items-center">
        <div className="w-4/12 flex justify-center">Aneesh</div>
        <div className="w-4/12 flex justify-center">aneesh@gmail.com</div>
        <div className="w-4/12 flex justify-center">Evpss Evenetts </div>
        <div className="w-4/12 flex justify-center"><button className="bg-blue-600 text-white  w-16 rounded">View</button></div>
      </div>
    </div>
  );
}

export default AdminRequest;
