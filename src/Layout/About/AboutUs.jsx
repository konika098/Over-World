import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TeamDetails from './TeamDetails';

const AboutUs = () => {
    const teamData = useLoaderData()
    return (
        <>

            <div className="w-full min-h-screen bg-[url('https://i.ibb.co/FwKXSYN/pexels-photo-1779487.webp')] bg-cover bg-center ">
                <div className="w-full min-h-screen h-full  flex flex-col  justify-center items-center backdrop-brightness-50">
                <div className="flex flex-col text-center w-full mb-20">
  <h1 className="text-2xl font-medium title-font mb-4 text-white xl:text-5xl" >OUR ACTIVE TEAM MEMBER </h1>
  <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">Our Team Member always there for you</p>
</div>

                    
                   <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 '> 
                   { 
                    teamData.map(data=><TeamDetails key={data.id} datas={data}></TeamDetails>)
                    }

                   </div>
                </div>
            </div>

        </>
    );
};

export default AboutUs;