import React, { useState  } from 'react'
import Vector from '../assets/Vector.png';
import Vector1 from '../assets/Vector(1).png';
import Vector2 from '../assets/Vector(2).png';
import Vector3 from '../assets/people.png';
import Vector4 from '../assets/Vector(3).png';
import Vector5 from '../assets/Vector5.png';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Form from './Form';


import Uploadimg from './Uploadimg';
import Header from './Header';
import { app ,db} from "../firebase-config";
import {getAuth} from "firebase/auth";
import {collection ,getDocs} from 'firebase/firestore'


function Navbar() {

    const auth = getAuth(app);
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose = () => setNav(!nav)
    const [user_name ,setname] = useState('')
    var user = auth.currentUser;
    const users_coll =  collection(db,'users')

    const getUsers = async (a) => {
        // let usera = auth.currentUser;
          const data = await getDocs(users_coll);
          const users=(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          let u = users.filter(function (user) {
            return user.uid === a;
        }).map(function (user) {
            return user.name;
        })
      
          setname(u[0])
        };

    if (user) {
     getUsers(user.uid);
    } 
   
    return (
        <>
        <div className='flex flex-col items-center md:items-start'>
            <div className='md:fixed  w-full md:w-[100px] h-[80px] flex  items-center md:h-screen  md:flex-col  bg-[#013B8D] text-white'>

                <label className='font-Poppins font-extrabold text-2xl  md:mt-[77px] ml-6 md:ml-0 '>
                    LOGO
                </label>
                <ul className='hidden md:flex flex-col my-12 '>
                    <li > <img src={Vector} alt='1' /> </li>
                    <li > <img src={Vector1} alt='2' /> </li>
                    <li > <img src={Vector2} alt='3' /> </li>
                    <li > <img src={Vector3} alt='4' /> </li>
                    <li > <img src={Vector4} alt='5' /> </li>
                    <li> <img src={Vector5} className='mt-14' alt='6' /></li>


                </ul>


                <div className='md:hidden absolute right-10 z-10' onClick={handleClick}>
                    {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}

                </div>

            </div>

            <ul className={!nav ? 'hidden' : ' bg-[#013B8D]  w-full flex flex-col justify-center items-center'}>
                <li > <img src={Vector} alt='1' onClick={handleClose} /> </li>
                <li > <img src={Vector1} alt='2' onClick={handleClose}/> </li>
                <li > <img src={Vector2} alt='3'onClick={handleClose} /> </li>
                <li > <img src={Vector3} alt='4'onClick={handleClose} /> </li>
                <li > <img src={Vector4} alt='5' onClick={handleClose}/> </li>
                <li> <img src={Vector5} className='md:mt-14' alt='6' onClick={handleClose} /></li>



            </ul>

        </div>
        <Header un = {user_name} />
        <Uploadimg/>
        <Form/>
        </>


    )
}

export default Navbar