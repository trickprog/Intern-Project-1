import React, { useState } from 'react'
import Vector6 from '../assets/Vector6.png';
import Vector7 from '../assets/Vector7.png';


function Uploadimg() {

    const [img, setimg] = useState('https://drive.google.com/uc?export=view&id=1EBITE8_OA7CkymYeCV96xI-pMyDseN3o')
    
    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setimg(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    };
    return (


        <div className='md:fixed   md:ml-[190px] md:mt-[90px]  flex justify-center mt-7 '>

            <img src={img} alt="" className='w-[375px] h-[313px]  rounded-[17px] ' id="img" />
            <input type="file" accept="image/*" className='hidden' name="image-upload" id="input" onChange={imageHandler} />
            <div className='flex items-center -ml-[90px] mt-[225px]'>
                <label htmlFor='input' className='absolute mt-4 ml-9 ' ><img src={Vector7} alt="" /></label>
                <label htmlFor='input'  > <img src={Vector6} alt='' /></label>
            </div>

        </div>
    )
}

export default Uploadimg