import React from 'react'
// import Search from '../Images/Search.svg';
import notification from '../assets/noti.png'
import profilePic from '../assets/pic.png'


function Header() {
  return (

    <>

      <div className="flex flex-row   mt-7 md:mt-[60px]  ">


        <input type="search" id="default-search" className=" md:left-50 md:w-[608px] w-[170px] tablet:w-[500px] md:ml-48 left-5 h-[50px] pl-14 py-2  text-sm font-Poppins shadow-x1  bg-[url('./assets/search.png')]
        bg-no-repeat bg-[center_left_1rem] bg-white font-normal" placeholder="Search" required></input>



        <img src={notification} alt='1' className='w-[26px] h-[30px] mt-2 ml-9  md:ml-[700px] '></img>
        <img src={profilePic} alt='1' className='w-[28px] h-[32px] md:h-10 md:w-9 mt-2 md:mt-1 ml-[10px] md:ml-6'></img>
        <label className='font-Poppins  ml-3 mt-2  w-[73px] h-[21px] font-medium text-[#013B8D]'>Saqib</label>



      </div>



    </>
  )
}

export default Header