import { Link } from "react-router-dom";

const ServiceName = ({ showDatas }) => {
    const { displayName, Image } = showDatas || {}
    return (
        <>
            <Link to="/serviceDetails" data-aos="zoom-in-down" data-aos-duration="1500" className="bg-purple-800 hover:bg-base-100 hover:cursor-pointer w-96 text-white font-semibold text-xl p-10 ">
                <div className="flex flex-col items-center ">
                    <img data-aos="flip-down" data-aos-duration="3000" className="w-10 mb-4" src={Image} alt="" />
                    <h1>{displayName}</h1>
                </div>

            </Link>

        </>
    );
};

export default ServiceName;