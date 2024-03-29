import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { InputText } from 'primereact/inputtext';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../Components/axios';

const Signup: React.FC = () => {

    const [partOne, setPartone] = useState<boolean>(true)
    const [partTwo, setPartTwo] = useState<boolean>(false)
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            Cpassword: '',
            otp:''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().required('Password is required'),
            Cpassword: Yup.string()
                .required('Confirm Password is required')
                .test('passwords-match', 'Passwords must match', function (value) {
                    return this.parent.password === value;
                }),
        }),
        onSubmit: async (values) => {
            try {
                const response = await api.post('/user/createUser', values, {
                    headers: {
                        'Content-Type': 'application/json',
                    },withCredentials: true, 
                })
                .then((response)=>{
                     navigate("/userLogin")
                })
            } catch (error) {
                console.error('Registration failed:', error);
            }
        },
    });
    const another = async () => {
        formik.validateForm().then(async (errors) => {
            if (Object.keys(errors).length === 0) {
                setPartone(false);
                setPartTwo(true);
    
                try {
                    // Call API with email
                    const response = await api.post('/user/signup', { email: formik.values.email }, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                    console.log(response.data);
                } catch (error) {
                    console.error('API call failed:', error);
                }
            }
        });
    };
    


    return (
        <div className="h-atuo overflow-y-scroll bg-[#f0f2f0] w-full flex justify-center custom-scrollbar">
            <div className="w-5/12 mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
                <div className="flex justify-center ">
                    <h1 className="text-4xl font-medium pb-4">Signup</h1>
                </div>

                <div className="my-5">
                    <button className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                        <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-6 h-6" alt="" />{' '}
                        <span>Login with Google</span>
                    </button>
                </div>

                <form onSubmit={formik.handleSubmit} className="my-10">
                    <div className="flex flex-col space-y-5">
                        {
                            partOne && <>

                                <label htmlFor="name">
                                    <p className="font-medium text-slate-700 pb-2">Name</p>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.name}
                                        className={`w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow ${formik.touched.name && formik.errors.name ? 'border-red-500' : ''
                                            }`}
                                        placeholder="Enter your name"
                                    />
                                    {formik.touched.name && formik.errors.name ? (
                                        <p className="text-red-500">{formik.errors.name}</p>
                                    ) : null}
                                </label>

                                <label htmlFor="email">
                                    <p className="font-medium text-slate-700 pb-2">Email address</p>
                                    <InputText
                                        id="email"
                                        name="email"
                                        keyfilter="email"
                                        className={`w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''
                                            }`}
                                        placeholder="Enter email address"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                    />
                                    {formik.touched.email && formik.errors.email ? (
                                        <p className="text-red-500">{formik.errors.email}</p>
                                    ) : null}
                                </label>

                                <label htmlFor="password">
                                    <p className="font-medium text-slate-700 pb-2">Password</p>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
                                        className={`w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow ${formik.touched.password && formik.errors.password ? 'border-red-500' : ''
                                            }`}
                                        placeholder="Enter your password"
                                    />
                                    {formik.touched.password && formik.errors.password ? (
                                        <p className="text-red-500">{formik.errors.password}</p>
                                    ) : null}
                                </label>

                                <label htmlFor="Cpassword">
                                    <p className="font-medium text-slate-700 pb-2">Confirm Password</p>
                                    <input
                                        id="Cpassword"
                                        name="Cpassword"
                                        type="password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.Cpassword}
                                        className={`w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow ${formik.touched.Cpassword && formik.errors.Cpassword ? 'border-red-500' : ''
                                            }`}
                                        placeholder="Enter your password"
                                    />
                                    {formik.touched.Cpassword && formik.errors.Cpassword ? (
                                        <p className="text-red-500">{formik.errors.Cpassword}</p>
                                    ) : null}
                                </label>
                             
                                <button
                                    onClick={another}
                                    type='button'
                                    className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2" >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                        />
                                    </svg>
                                    <span>signup</span>
                                </button>

                                <p className="text-center">
                            Already a user?{' '}
                            <Link to="/userLogin" className="text-indigo-600 font-medium inline-flex space-x-1 items-center">
                                <span>Login </span>
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                </span>
                            </Link>
                        </p>

                            </>
                        }{
                            partTwo && <>
                                
                                <label htmlFor="otp">
                                    <p className="font-medium text-slate-700 pb-2">Password</p>
                                    <input
                                        id="otp"
                                        name="otp"
                                        type="string"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.otp}
                                        className={`w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow ${formik.touched.password && formik.errors.password ? 'border-red-500' : ''
                                            }`}
                                        placeholder="Enter your password"
                                    />
                                    {formik.touched.password && formik.errors.password ? (
                                        <p className="text-red-500">{formik.errors.password}</p>
                                    ) : null}
                                </label>


                                
                                <button
                                    type="submit"
                                    className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
                                >
                                  
                                    <span>verify</span>
                                </button>

                            </>
                        }


                       
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
