import React from "react";


const  RequestDetails: React.FC=()=> {
    return (
        <div className='h-screen overflow-y-scroll bg-[#e8e8e8] w-full flex justify-center custom-scrollbar'>

        <div className="w-11/12 h-96 mt-3 flex  flex-col items-center " >
            <div className="rounded-md bg-white shadow-md  w-full h-11 flex flex-row items-center">
                sdfs
            </div>
            <div className="rounded-md mt-2 bg-white shadow-md h-auto p-7 ps-13  w-full ">
                <div className="bg-white ps-2">
                    <h1 className="font-sans font-bold text-2xl" >Organization Information</h1>
                </div>
                <hr className="mt-3"></hr>
                <div className=" w-4/12  p-6">
                    <div className="flex">
                        <div className="w-4/12 " > <p className="font-sans font-semibold">Owner name</p></div>
                        <div className="w-3">:</div>
                        <div className="w-8/12 "> <p> Harif </p></div>

                    </div>
                    <div className="flex pt-2">
                        <div className="w-4/12" > <p className="font-sans font-semibold">Company name</p></div>
                        <div className="w-3">:</div>
                        <div className="w-8/12"> <p> Evoss Events </p></div>

                    </div>
                    <div className="flex pt-2">
                        <div className="w-4/12" > <p className="font-sans font-semibold">Email</p></div>
                        <div className="w-3">:</div>
                        <div className="w-8/12"> <p>  Evoss@gmail.com</p></div>

                    </div>
                    <div className="flex pt-2">
                        <div className="w-4/12" > <p className="font-sans font-semibold">phone no.</p></div>
                        <div className="w-3">:</div>
                        <div className="w-8/12"> <p> 73827281093</p></div>
                    </div>
                    <div className="flex pt-2">
                        <div className="w-4/12" > <p className="font-sans font-semibold">State</p></div>
                        <div className="w-3">:</div>
                        <div className="w-8/12"> <p> Kerala</p></div>
                    </div>
                    <div className="flex pt-2">
                        <div className="w-4/12" > <p className="font-sans font-semibold">District</p></div>
                        <div className="w-3">:</div>
                        <div className="w-8/12"> <p> Malappuram</p></div>
                    </div>
                    <div className="flex pt-2">
                        <div className="w-4/12" > <p className="font-sans font-semibold">City</p></div>
                        <div className="w-3">:</div>
                        <div className="w-8/12"> <p> Manjeri</p></div>
                    </div>
                    <div className="flex pt-2">
                        <div className="w-4/12" > <p className="font-sans font-semibold">Pincode</p></div>
                        <div className="w-3">:</div>
                        <div className="w-8/12"> <p> 673690</p></div>
                    </div>
                    <div className="flex pt-2">
                        <div className="w-4/12" > <p className="font-sans font-semibold">floor/building</p></div>
                        <div className="w-3">:</div>
                        <div className="w-8/12"> <p> 3rd floor kinfra</p></div>
                    </div>
                </div>
            </div>
            <div className="rounded-md mb-4 mt-2 bg-white shadow-md h-auto p-7 ps-13  w-full ">
                <div className="bg-white ps-2">
                    <h1 className="font-sans font-bold text-xl" >Organization Information</h1>
                </div>
                <hr className="mt-3"></hr>
                <div className="ms-6">
                    <div className="p-6">
                        <h3>Owner id proof</h3>
                    </div>
                    <div style={{ backgroundColor: '#f0f2f0' }} className="border-stone-950 border bg-[#f0f2f0] rounded w-7/12 h-64">

                    </div>
                </div>
                <div className="ms-6">
                    <div className="p-6">
                        <h3>company license</h3>
                    </div>
                    <div  className="border-stone-950 bg-[#f0f2f0]  border rounded w-7/12 h-64">

                    </div>
                </div>
                <div className="ms-6">
                    <div className="p-6">
                        <h3>Company insurance</h3>
                    </div>
                    <div className="border-stone-950 bg-[#f0f2f0]  border rounded w-7/12 h-64">

                    </div>
                </div>
                <div className="ms-6">
                    <div className="p-6">
                        <h3>Bank passbook</h3>
                    </div>
                    <div className="border-stone-950 border bg-[#f0f2f0]  rounded w-7/12 h-64">

                    </div>
                </div>

                <div className="flex gap-3 p-4 w-full justify-end">
                    <button className="rounded-sm text-white w-20 ps-3 pe-3 pt-1 pb-1 bg-blue-600">Approve</button>
                    <button className="rounded-sm text-white shadow-md w-20 ps-3 pe-3 pt-1 pb-1 bg-red-500">Reject</button>
                </div>
            </div>
        </div>
        </div>
    )
}


export default RequestDetails