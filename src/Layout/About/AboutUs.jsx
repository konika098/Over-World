import React from 'react';

const AboutUs = () => {
    return (
       <>
       <div className="w-full min-h-screen bg-[url('https://i.ibb.co/FwKXSYN/pexels-photo-1779487.webp')] bg-cover bg-center ">
        <div className="w-full min-h-screen h-full  flex flex-col  justify-center items-center backdrop-brightness-50">
            <h1 className='text-white mb-2'>ACTIVE TEAM MEMBERS</h1>
       <div className='grid grid-cols-1 gap-2 xl:grid-cols-4 lg:grid-cols-2 ' >
        <img className='w-80 h-96' src="../../../public/asstes/1.jpg" alt="" />
        <img  className='w-80 h-96' src="../../../public/asstes/2.jpg" alt="" />
        <img  className='w-80 h-96' src="../../../public/asstes/3.jpg" alt="" />
        <img   className='w-80 h-96' src="../../../public/asstes/4.jpg" alt="" />
        
       
       </div>
        </div>
       </div>

       </>
    );
};

export default AboutUs;