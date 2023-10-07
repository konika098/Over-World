import { AiOutlineArrowRight } from "react-icons/ai";

const TrendingCards = ({datas}) => {
    const {name,profile_image,image,bid_time, price}=datas
    return (
      <>
      <div data-aos="zoom-in" className="card w-96 bg-base-100 shadow-xl mt-10">
                <div className="flex items-center gap-2 ml-3 mb-4 text-white">
                    <img src={profile_image} alt="" />
                     <div>
                        <h2>{name}</h2>
                        <p>@helina</p>
                     </div>
                </div>
                <figure><img src={image} alt="" /></figure>
                <div className="flex justify-between mt-4 mb-4">
                    <div className="ml-3 text-white">
                        <h4>{bid_time}</h4>
                        <h1 className="font-semibold text-lg">{price} <span className="text-purple-800 font-bold ">ETH</span></h1>
                    </div>
                    <button className="btn text-white  bg-purple-800 border-none mr-3 hover:bg-purple-700">Bid <AiOutlineArrowRight /></button>
                </div>
                
            </div>
      </>
    );
};

export default TrendingCards;