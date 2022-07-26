import React from 'react';
import Background from './Background';
import Loginform from './Loginform';
const Login = () => {
    return (
        <div>

            <Background />
            
            <div className=''>
            <div className='absolute md:left-28 md:top-18  top-14'>
                <h1 className='md:text-6xl text-3xl text-color1 font-Rubik font-bold md:text-start '>Grow your </h1>
                <h1 className='md:text-6xl text-3xl text-color1 font-Rubik font-bold md:text-start'>business today !</h1>
                <p className='md:text-xl text-md text-color2 font-Rubik font-normal mt-4 md:text-start'>Add events, locations, restaurant and let the visitors
                    know about you. </p>
            </div>
            <div className='grid grid-cols-1 lg:justify-items-end '>
            <Loginform/>
            </div>
            </div>
           
            

        </div>
    );
}

export default Login;
