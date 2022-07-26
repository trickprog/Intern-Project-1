import React from 'react';

import Airplane from '../assets/Aeroplane.png';
import Map from '../assets/Salesman.png';

const Background = () => {
    return (
        <div  >


            <div className='relative'>
                <div className='absolute'>


                    <svg className='fixed' width="1050" height="936" viewBox="0 0 1050 936" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="525" cy="411" r="525" fill="url(#paint0_radial_6_82)" fillOpacity="0.59" />
                        <defs>
                            <radialGradient id="paint0_radial_6_82" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(525 411) rotate(90) scale(525)">
                                <stop stopColor="#013B8D" stopOpacity="0.37" />
                                <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
            </div>

            <div className='relative'>
                <div className='absolute'>
                    <svg className='fixed' width="567" height="512" viewBox="0 0 567 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="195" cy="140" r="300" fill="#92B8FF" fillOpacity="0.2" />
                    </svg>
                </div>
            </div>

            <div className='relative '>
                <div className='fixed right-0 bottom-0'>
                    <svg width="240" height="594" viewBox="0 0 240 594" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="372" cy="372" r="300" fill="#92B8FF" fillOpacity="0.2" />
                    </svg>

                </div>
            </div>


            <div className='relative'>
                <div className='absolute  z-0 top-0 left-0 ' >
                    <img className='w-[750px]  ' src={Airplane} alt="Map" />

                </div>
            </div>
            


            <div className='relative md:block hidden'>
                <div className=' md:fixed bottom-0 left-0'  >
                    <img className='w-[799px] md:h-[500px] '  src={Map} alt="Map" />
                </div>
            </div>
            










        </div>
    );
}

export default Background;
