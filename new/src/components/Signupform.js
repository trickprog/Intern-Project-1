import React, { useState } from 'react';
import { db } from "../firebase-config";
import {
    collection,
    
    addDoc,

} from "firebase/firestore";
import {  createUserWithEmailAndPassword } from "firebase/auth";


import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;

if (user) {
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/firebase.User
  // ...
} else {
  // No user is signed in.
}

const Signupform = () => {
    // const [users,setUsers] = useState([])
    const userCollectionRef = collection(db, 'users')
    const [userdata, setuserdata] = useState({
        username: "",
        password: "",
        email: "",
        phone: "",

    });
    const registerWithEmailAndPassword = async (name, email, password,phone) => {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const user = res.user;
            await addDoc(userCollectionRef, { uid : user.uid ,name: userdata.username, email: userdata.email, phone: userdata.phone });
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };


    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setuserdata({ ...userdata, [name]: value });
    };
    let res = false;
    // const createUser = async () => {
    //     await addDoc(userCollectionRef, { username: userdata.username, password: userdata.password, email: userdata.email, phone: userdata.phone });
    //     res = true;
    // };


    const submitData = async (event) => {
        event.preventDefault();
        const { username, password, email, phone } = userdata;

        if (username && password && email && phone) {
            registerWithEmailAndPassword(username,email,password,phone)
            res = true
            if (res) {
                setuserdata({
                    username: "",
                    password: "",
                    email: "",
                    phone: "",

                });
                alert("Data Stored");
            } else {
                alert("plz fill the data");
            }
        } else {
            alert("plz fill the data");
        }
    };



    return (
        <div>
            <div className=' relative   lg:mr-10'>

                <div className='lg:mt-16 mt-[230px] '>
                    <div className=''>
                        <div className='flex justify-evenly mb-2'>
                            <a href='/Login'><h1 className='text-lg  text-color1 font-Rubik font-bold '>Login</h1></a>
                            <a href='/Signup'><h1 className='text-lg  text-color1 font-Rubik font-bold '>Sign up</h1></a>
                        </div>
                        <h1 className='text-3xl  text-color1 font-Rubik font-bold '>Create new account</h1>
                        <p className='text-sm text-color2 font-Rubik font-normal my-5 '>Create new account to login</p>

                    </div>
                    <div className="mb-6 mx-5">
                        <input type="text" id="" className="placeholder:font-Rubik placeholder:font-s pl-5  md:w-[430px] w-full sm:w-auto h-[70px] bg-[#E6EBFF]  text-gray-900 text-sm rounded-lg" placeholder="Username"
                            name="username"
                            value={userdata.username}
                            onChange={postUserData}
                            required />
                    </div>
                    <div className="mb-6 mx-5">

                        <input type="password" id="" placeholder='Password' className="pl-5 md:w-[430px] w-full sm:w-auto  h-[70px] bg-[#E6EBFF] border border-gray-300 text-gray-900 text-sm rounded-lg "
                            name="password"
                            value={userdata.password}
                            onChange={postUserData}
                            required />
                    </div>
                    <div className="mb-6 mx-5">

                        <input type="email" id="" placeholder='Email' className="pl-5 md:w-[430px] w-full sm:w-auto  h-[70px] bg-[#E6EBFF] border border-gray-300 text-gray-900 text-sm rounded-lg "
                            name="email"
                            value={userdata.email}
                            onChange={postUserData}
                            required />
                    </div>
                    <div className="mb-6 mx-5">

                        <input type="text" id="" placeholder='Phone' className="pl-5 md:w-[430px] w-full sm:w-auto  h-[70px] bg-[#E6EBFF] border border-gray-300 text-gray-900 text-sm rounded-lg "
                            name="phone"
                            value={userdata.phone}
                            onChange={postUserData} required />
                    </div>
                    <div className='mx-5'>
                        <button type="submit" className="  md:w-[430px] h-[70px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={submitData}
                        >Submit</button>
                    </div>
                </div>
                <div className=' mb-6'>
                    <p className='text-sm text-color2 font-Rubik font-normal mt-4 '>Don’t have an account?</p>
                    <a href='/Login'><h1 className='text-lg  text-color1 font-Rubik font-bold '>Login</h1></a>
                </div>
            </div>
        </div>
    );
}

export default Signupform;
