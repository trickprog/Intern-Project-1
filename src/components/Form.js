import React ,{useState} from 'react';


function Form() {
    const [userData, setUserData] = useState({
        EventName: "",
        Address: "",
        Country: "",
        City: "",
        Date: "",
        Time: "",
        Desc: "",
      });
      let name, value;
      const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
    



        
        setUserData({ ...userData, [name]: value });
      };

      const submitData = async (event) => {
        event.preventDefault();
        const { EventName, Address, Country, City, Date, Time,Desc } = userData;
    
        if (EventName && Address && Country && City && Date && Time && Desc) {
          const res = fetch(
            "https://react-firebase-fee6d-default-rtdb.firebaseio.com/Events.json",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                EventName, 
                Address, 
                Country, 
                City, 
                Date, 
                Time,
                Desc ,
              }),
            }
          );
    
          if (res) {
            setUserData({
                EventName : "", 
                Address: "", 
                Country: "", 
                City: "", 
                Date: "", 
                Time: "",
                Desc: "" ,
              
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
            <form className='flex justify-center'>
                <div className='flex flex-col gap-8 md:fixed md:top-[190px] md:left-[750px] mt-[50px] 
                md:mt-0  font-Poppins md:w-[513px] w-[380px]  '  >
                    {/* <img src={vector1} alt='loc'/> */}

                    <input type="text" id="" className=" bg-[#EEF7FF] py-3    pl-7 rounded-[10px] shadow-shadowinner"
                        placeholder="Event Name" required
                        name="EventName"
                        value={userData.EventName}
                        onChange={postUserData} />
                    <input type="text" id="" className=" bg-[#EEF7FF] py-3    pl-7 rounded-[10px] bg-[url('./assets/loc.png')] bg-no-repeat md:bg-[center_left_29rem] bg-[center_left_21rem]  shadow-shadowinner"
                        placeholder="Address" required
                        name="Address" 
                        value={userData.Address}
                        onChange={postUserData} />
                    <input type="text" id="" className=" bg-[#EEF7FF] py-3    pl-7 rounded-[10px] bg-[url('./assets/arrow.png')] bg-no-repeat md:bg-[center_left_29rem]   bg-[center_left_21rem] shadow-shadowinner"
                        placeholder="Country" required 
                        name="Country"
                        value={userData.Country}
                        onChange={postUserData} />

                    <input type="text" id="" className=" bg-[#EEF7FF] py-3    pl-7 rounded-[10px] shadow-shadowinner"
                        placeholder="City" required 
                        name="City"
                        value={userData.City}
                        onChange={postUserData} />

                    <div className='flex space-x-9'>
                        <input type="text" id="" className=" bg-[#EEF7FF] py-3   md:w-[200px] w-[150px] pl-7 rounded-[10px] bg-[url('./assets/calend.png')] bg-no-repeat md:bg-[center_left_10rem] bg-[center_left_7rem]  shadow-shadowinner"
                            placeholder="Date" required 
                            name="Date"
                            value={userData.Date}
                            onChange={postUserData} />
                        <input type="text" id="" className=" bg-[#EEF7FF] py-3   md:w-[200px] w-[150px] pl-7 rounded-[10px] bg-[url('./assets/clock.png')] bg-no-repeat md:bg-[center_left_10rem]  bg-[center_left_7rem] shadow-shadowinner"
                            placeholder="Time" required 
                            name="Time"
                            value={userData.Time}
                            onChange={postUserData} />

                    </div>
                    <textarea type="text" id="" className=" bg-[#EEF7FF] py-3 pt-3 h-[150px]  pl-7 rounded-[10px] shadow-shadowinner text-[17px]"
                        placeholder="Type Description" required 
                        name="Desc"
                        value={userData.Desc}
                        onChange={postUserData} />
                    <button className=' h-[50px] border rounded-[10px] bg-[#013B8D]  text-white shadow-xl4 hover:bg-white hover:text-[#013B8D]'  onClick={submitData}>Add</button>
                </div>

            </form>

        </div>

    )
}

export default Form