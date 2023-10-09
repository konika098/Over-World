// import { AiOutlineTeam} from "react-icons/ai";
// import { AiOutlineSketch} from "react-icons/ai";
// import { AiOutlineSetting} from "react-icons/ai";
import { useEffect, useState } from "react";
import { RiServiceFill } from "react-icons/ri";

import ServiceName from "./ServiceName";




const Services = () => {
    const [data,setData] =useState([])

    const fetchUserData = () => {
        fetch("Service.json")
          .then(response => {
            return response.json()
          })
          .then(data => {
            setData(data)
          })
      }
      useEffect(()=>{
        fetchUserData()
      })
    
    console.log(data)

    return (
        <>
        <h1 className=" text-lg lg:text-4xl font-bold italic text-center text-white mt-20 flex gap-3">OUR POWERFUL SERVICES DONE ON TIME<RiServiceFill></RiServiceFill></h1>
        <hr className="bg-purple-300 w-1/5  mt-4 mx-auto h-1"/>
      
     <div className="flex flex-wrap -m-4">
     {
        data.map(showData => <ServiceName key={showData.id} showDatas={showData}></ServiceName>)
      }
     </div>
        
        </>
    );
};

export default Services;