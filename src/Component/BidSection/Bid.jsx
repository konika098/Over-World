import { AiOutlineArrowRight } from "react-icons/ai";
const Bid = () => {
    return (
        <>

            <div  data-aos="zoom-out-right" 
     data-aos-duration="2500" className="grid grid-cols-3  mx-auto pt-20 gap-7 "
           >
                <div className="card w-[450px] bg-base-100 shadow-2xl mx-auto  ">
                    <div className="flex">
                        <figure><img className="ml-6" src="/public/asstes/bid.jpg" alt="" /></figure>
                        <div className="card-body">
                            <h2 className="text-lg font-semibold">WOLF GAMING ART</h2>
                            <div className="flex gap-2 items-center">
                                <img src="/public/asstes/avatar.png" alt="" />
                                <p className="">Alax Max</p>

                            </div>
                            <div className="flex items-center gap-2">
                                <h1 className="font-semibold text-base">1.002 <span className="text-purple-800 font-bold text-base ">ETH</span></h1>
                                <button className="btn text-white  bg-purple-800 border-none hover:bg-purple-700">Bid <AiOutlineArrowRight /></button>
                            </div>
                        </div>
                    </div>
                </div>

           
                <div className="card w-[450px] bg-base-100 shadow-2xl mx-auto " >
                    <div className="flex">
                        <figure><img className="ml-6" src="/public/asstes/bid2.jpg" alt="" /></figure>
                        <div className="card-body">
                            <h2 className="text-lg font-semibold">WOLF GAMING ART</h2>
                            <div className="flex gap-2 items-center">
                                <img src="/public/asstes/avatar.png" alt="" />
                                <p className="">Alax Max</p>

                            </div>
                            <div className="flex items-center gap-2">
                                <h1 className="font-semibold text-base">1.002 <span className="text-purple-800 font-bold text-base ">ETH</span></h1>
                                <button className="btn text-white  bg-purple-800 border-none hover:bg-purple-700">Bid <AiOutlineArrowRight /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div  className="card w-[450px] bg-base-100 shadow-2xl mx-auto  ">
                    <div className="flex">
                        <figure><img className="ml-6" src="/public/asstes/bid3.jpg" alt="" /></figure>
                        <div className="card-body">
                            <h2 className="text-lg font-semibold">WOLF GAMING ART</h2>
                            <div className="flex gap-2 items-center">
                                <img src="/public/asstes/avatar.png" alt="" />
                                <p className="">Alax Max</p>

                            </div>
                            <div className="flex items-center gap-2">
                                <h1 className="font-semibold text-base">1.002 <span className="text-purple-800 font-bold text-base ">ETH</span></h1>
                                <button className="btn text-white  bg-purple-800 border-none hover:bg-purple-700">Bid <AiOutlineArrowRight /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






        </>
    );
};

export default Bid;