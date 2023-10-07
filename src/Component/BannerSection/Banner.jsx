import React from 'react';

const Banner = () => {
    return (
      <>
        <div className='bg-cover w-full h-[900px]  ' style={{ 
            backgroundImage: `url("https://i.ibb.co/wgMCXTZ/bg.jpg")`,
           
          }}  >
            {/* <h1 className='text-white'>this is the banner section</h1> */}
            <div className='flex justify-center '>
                <img className='relative hidden lg:flex '  src="../../../public/asstes/banner1.png" alt="" />
                <img data-aos="flip-up"   data-aos-duration="2000" className='absolute bottom-1' src="../../../public/asstes/banner2.png" alt="" />
            </div>
            <div>
                
            </div>
        </div>
      </>
    );
};

export default Banner;