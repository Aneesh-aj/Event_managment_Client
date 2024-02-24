import React, { useState } from 'react';

import { InputText } from 'primereact/inputtext';
import { Link } from 'react-router-dom';
import api from '../../Components/axios';

const OrganizerLogin: React.FC = () =>{

    const [formData,setFormdata] = useState({
        name :'',
        email:'',
        password: ''
    })
   
   async function handler (e : React.FormEvent){
        e.preventDefault();
        const response = await api.post('/user/register', formData, {
            headers: {
              'Content-Type': 'application/json',
            },
          });

          console.log(response.data)
    }

    async function handlerchange(e : React.ChangeEvent){
        const { name, value } = e.target as HTMLInputElement
        setFormdata({
            ...formData,
            [name]: value,
        });
        console.log(formData)
    }


    return (
        <div className='h-screen overflow-y-scroll bg-[#f0f2f0] w-full flex justify-center custom-scrollbar'>

            <div className="w-5/12 mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
                <div className='flex  justify-center '>
                    <h1 className="text-4xl font-medium pb-4">Login</h1>
                </div>
                <div className='flex  justify-center '>
                    <p className="text-slate-500">Hi, Welcome back 👋</p>
                </div>
                <div className="my-5">
                    <button className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                        <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-6 h-6" alt="" /> <span>Login with Google</span>
                    </button>
                </div>

                <form action="" onSubmit={handler} className="my-10">
                    <div className="flex flex-col space-y-5">
                        <label htmlFor="email">
                            <p className="font-medium text-slate-700 pb-2">Email address</p>
                            <InputText onChange={handlerchange} keyfilter="email" id="email" name="email" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address" />
                        </label>

                        <label htmlFor="password">
                            <p className="font-medium text-slate-700 pb-2">Password</p>
                            <input id="password" onChange={handlerchange} name="password" type="password" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password" />
                        </label>

                        <div className="flex flex-row justify-between">
                            <div>

                            </div>
                            <div>
                                <a href="#" className="font-medium text-indigo-600">Forgot Password?</a>
                            </div>
                        </div>

                        <button type='submit' className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                            <span>Login</span>
                        </button>
                        <p className="text-center">Not registered yet? <span className="text-indigo-600 font-medium inline-flex space-x-1 items-center"> <Link to='/organizer/Registration'><span>Register now </span></Link> <span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg></span></span></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OrganizerLogin

