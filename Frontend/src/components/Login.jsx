import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    //const navigate = useNavigate();

    const onSubmit = async (data) => {
        const userInfo = {
            //fullname: data.fullname,
            email: data.email,
            password: data.password,
        };

        console.log("User Info Sent to Backend:", userInfo);

        try {
            const res = await axios.post("http://localhost:4001/user/login", userInfo);
            console.log(res.data);

            if (res.status === 200) {
                //alert("Login successful");
                toast.success('Login successful');
                document.getElementById('my_modal_3').close();
                setTimeout(()=>{
                    window.location.reload();
                    localStorage.setItem("Users",JSON.stringify(res.data))

                },3000)
                
                

            }
            //localStorage.setItem("Users",JSON.stringify(res.data))
        } catch (err) {
            console.log("Axios Error:", err.response?.data || err.message);
            //alert("Login error: " + (err.response?.data?.message || err.message));
            toast.error("Login error: " + (err.response?.data?.message || err.message));
            
        }
        //console.log("Login Data:", data);
        // Handle login logic here (e.g., API request)
    };

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    {/* Form submission properly handled */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Close button */}
                        <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                         onClick={() => document.getElementById('my_modal_3').close()}>
                            ✕
                        </button>

                        <h3 className="font-bold text-lg">Login</h3>

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

                        {/* Login Button */}
                        <div className="flex justify-around mt-6">
                            <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                                Login
                            </button>
                            <p>
                                Not registered? <Link to='/signup' className='underline text-blue-600 cursor-pointer'>Signup</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;
