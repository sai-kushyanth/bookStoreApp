import React from 'react'
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';


function Logout() {
    const [authUser,setAuthuser]=useAuth();
    console.log(authUser);

    const handlelogout=()=>{
        try {
            setAuthuser({
                ...authUser,
                user:null
            })
        localStorage.removeItem("Users");
        toast.success("Logout successfull")
        window.location.reload()
        
        } catch (error) {
            toast.error("Error: "+error.message)
        }
    }
  return (
    <>
    <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handlelogout}>
        Logout
    </button>
    </>
  )
}

export default Logout;