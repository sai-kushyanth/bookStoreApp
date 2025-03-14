import React from 'react';
import { useForm } from 'react-hook-form';

function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Contact Form Data:", data);
        alert("Message sent successfully!");
        // You can add API call logic here to send form data to your backend.
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    
                    {/* Name Input */}
                    <div>
                        <label className="block font-medium">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-3 py-2 border rounded-md outline-none"
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>

                    {/* Email Input */}
                    <div>
                        <label className="block font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full px-3 py-2 border rounded-md outline-none"
                            {...register("email", { 
                                required: "Email is required", 
                                pattern: { 
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
                                    message: "Invalid email format" 
                                } 
                            })}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    {/* Message Input */}
                    <div>
                        <label className="block font-medium">Message</label>
                        <textarea
                            rows="4"
                            placeholder="Type your message"
                            className="w-full px-3 py-2 border rounded-md outline-none"
                            {...register("message", { required: "Message is required" })}
                        />
                        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
