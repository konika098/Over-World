import React from 'react';

const AboutUs = () => {
    return (
       <>
       <div className="w-full min-h-screen bg-[url('https://i.ibb.co/FwKXSYN/pexels-photo-1779487.webp')] bg-cover bg-center ">
        <div className="w-full min-h-screen h-full  flex flex-col  justify-center items-center backdrop-brightness-50">
       <div className='relative'>
       <img className='relative' src="https://i.ibb.co/QvnJJf8/realistic-kintsugi-cover-collection-23-2148917358-2.jpg" alt="" />
       <img className='absolute top-24 left-20' src="https://i.ibb.co/wSDvBN8/team01.png" alt="" />
       <h1 className='absolute text-white top-10'>developer</h1>
       </div>
        </div>
       </div>

       </>
    );
};

export default AboutUs;