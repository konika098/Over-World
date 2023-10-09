import { AiOutlineArrowRight } from "react-icons/ai";

const BidsCard = ({Bids}) => {
    const {title,name,image,price,Image}=Bids
    return (
      <>
        <div  className="card w-[450px] bg-base-100 shadow-2xl mx-auto  text-white ">
                    <div className="flex">
                        <figure><img className="ml-6" src={Image} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="text-lg font-semibold">{title}</h2>
                            <div className="flex gap-2 items-center">
                                <img src={image} alt="" />
                                <p className="">{name}</p>

                            </div>
                            <div className="flex items-center gap-5">
                                <h1 className="font-semibold text-base">{price} <span className="text-purple-800 font-bold text-base ">ETH</span></h1>
                                <button className="btn text-white  bg-purple-800 border-none hover:bg-purple-700">Bid <AiOutlineArrowRight /></button>
                            </div>
                        </div>
                    </div>
                </div> 
      </>
    );
};

export default BidsCard;