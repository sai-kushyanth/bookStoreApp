import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';

function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    //const navigate = useNavigate();

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        };

        console.log("User Info Sent to Backend:", userInfo);

        try {
            const res = await axios.post("http://localhost:4001/user/signup", userInfo);
            console.log(res.data);

            if (res.status === 201) {
                //alert("Signup successful");
                toast.success('signup successful');
                localStorage.setItem("Users",JSON.stringify(res.data))
                
            }
            //localStorage.setItem("Users",JSON.stringify(res.data))
        } catch (err) {
            console.log("Axios Error:", err.response?.data || err.message);
            //alert("Signup error: " + (err.response?.data?.message || err.message));
            toast.error("signup error: " + (err.response?.data?.message || err.message));
        }
    };

    return (
        <div className='flex h-screen items-center justify-center'>
            <div className="border-2 shadow-md p-5 rounded-md">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="font-bold text-lg">Sign Up</h3>

                    <div className="mt-4 space-y-2">
                        <span>Name</span><br />
                        <input type="text" placeholder="Enter your full name" {...register("fullname", { required: "Name is required" })} className="w-80 px-3 py-1 border rounded-md outline-none" />
                        {errors.fullname && <span className="text-red-500 text-sm">{errors.fullname.message}</span>}
                    </div>

                    <div className="mt-4 space-y-2">
                        <span>Email</span><br />
                        <input type="email" placeholder="Enter your email" {...register("email", { required: "Email is required" })} className="w-80 px-3 py-1 border rounded-md outline-none" />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    </div>

                    <div className="mt-4 space-y-2">
                        <span>Password</span><br />
                        <input type="password" placeholder="Enter your password" {...register("password", { required: "Password is required" })} className="w-80 px-3 py-1 border rounded-md outline-none" />
                        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                    </div>

                    <div className="flex justify-around mt-6">
                        <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Signup</button>
                        <p>Have an account? <Link to="/" className="underline text-blue-600 cursor-pointer">Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
