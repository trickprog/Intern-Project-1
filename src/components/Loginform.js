import React, { useState } from 'react';
import { app } from "../firebase-config";
// import {  logInWithEmailAndPassword } from "../firebase-config";
import {

    signInWithEmailAndPassword,
    getAuth
} from "firebase/auth";
import { useNavigate } from "react-router-dom"


const Loginform = () => {
    const auth = getAuth(app);
    const [userdata, setuserdata] = useState({
        email: "",
        password: "",


    });
    const history = useNavigate()
    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setuserdata({ ...userdata, [name]: value });
    };
    const logInWithEmailAndPassword = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);

            history('/Home')
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };


    return (
        <div className=' relative  lg:mr-10'>

            <div className='lg:mt-36 mt-[230px] '>
                <div className=''>
                    <div className='flex justify-evenly mb-2'>
                        <a href='/Login'><h1 className='text-lg  text-color1 font-Rubik font-bold '>Login</h1></a>
                        <a href='/Signup'><h1 className='text-lg  text-color1 font-Rubik font-bold '>Sign up</h1></a>
                    </div>
                    <h1 className='text-4xl  text-color1 font-Rubik font-bold '>Welcome Back</h1>
                    <p className='text-sm text-color2 font-Rubik font-normal my-5 '>Login now to continue</p>

                </div>
                <div className="mb-6 mx-5">
                    <input type="email" id="Username" className="placeholder:font-Rubik placeholder:font-s pl-5  md:w-[430px] w-full sm:w-auto h-[70px] bg-[#E6EBFF]  text-gray-900 text-sm rounded-lg" placeholder="Email"
                        name="email"
                        value={userdata.email}
                        onChange={postUserData} required />
                </div>
                <div className="mb-6 mx-5">

                    <input type="password" id="password" placeholder='Password' className="pl-5 md:w-[430px] w-full sm:w-auto  h-[70px] bg-[#E6EBFF] border border-gray-300 text-gray-900 text-sm rounded-lg "
                        name="password"
                        value={userdata.password}
                        onChange={postUserData}
                        required />
                </div>
                <div className='mx-5'>
                    <button type="submit" className="  md:w-[430px] h-[70px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => logInWithEmailAndPassword(userdata.email, userdata.password)}
                    >Submit
                    </button>
                </div>
            </div>
            <div className=' mb-6'>
                <p className='text-sm text-color2 font-Rubik font-normal mt-4 flex  justify-center '>Don’t have an account?</p>
                <a href='/Signup'><h1 className='text-lg  text-color1 font-Rubik font-bold  flex justify-center '>Sign up</h1></a>
            </div>
        </div>
    );
}

export default Loginform;

