import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Signup Data:", data);
        // Handle signup logic here (e.g., send data to API)
    };

    return (
        <div className='flex h-screen items-center justify-center'>
            <div id="my_modal_3" className="border-2 shadow-md p-5 rounded-md">
                <div className="">
                    {/* Signup Form */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Close Button */}
                        <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_3').close()}>
                            ✕
                        </button>

                        <h3 className="font-bold text-lg">Sign Up</h3>

                        {/* Name Input */}
                        <div className="mt-4 space-y-2">
                            <span>Name</span>
                            <br />
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                className="w-80 px-3 py-1 border rounded-md outline-none"
                                {...register("name", { required: "Name is required" })}
                            />
                            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                        </div>

                        {/* Email Input */}
                        <div className="mt-4 space-y-2">
                            <span>Email</span>
                            <br />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-80 px-3 py-1 border rounded-md outline-none"
                                {...register("email", { required: "Email is required" })}
                            />
                            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                        </div>

                        {/* Password Input */}
                        <div className="mt-4 space-y-2">
                            <span>Password</span>
                            <br />
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-80 px-3 py-1 border rounded-md outline-none"
                                {...register("password", { required: "Password is required" })}
                            />
                            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                        </div>

                        {/* Signup Button */}
                        <div className="flex justify-around mt-6">
                            <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                                Signup
                            </button>
                            <p>
                                Have an account? <Link to='/' className='underline text-blue-600 cursor-pointer'>Login</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
