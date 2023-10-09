import { Link } from "react-router-dom";

const ServiceName = ({ showDatas }) => {
    const { displayName, Image, id, short_description, price } = showDatas || {}
    return (
        <>

<Link to={`/serviceDetails/${id}`} className="lg:w-1/3 sm:w-1/2 p-4">
  <div className="flex relative">
    <div className="absolute inset-0 w-full h-full object-cover object-center flex justify-center items-center flex-col">
    <img data-aos="flip-down" data-aos-duration="3000" className="w-10 mb-4 " src={Image} alt="" />
                            <h1>{displayName}</h1>
    </div>
    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
    <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Title: {short_description}</h2>

<p class="leading-relaxed">Price: {price}</p>
    </div>
  </div>
</Link>

           

        </>
    );
};

export default ServiceName;