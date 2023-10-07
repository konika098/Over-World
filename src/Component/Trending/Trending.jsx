import { AiOutlineArrowRight } from "react-icons/ai";
const Trending = () => {
    return (
        <>
        <div className="flex text-5xl font-semibold italic items-center gap-4 mt-9 text-white">
        <h1>TOP TRENDING</h1>
        <img className="w-10 h-14" src="/public/asstes/fire.png" alt="" />
        </div>
            <div className="grid grid-cols-3 gap-5  ">
            <div data-aos="zoom-in" className="card w-96 bg-base-100 shadow-xl mt-10 text-white">
                <div className="flex items-center gap-2 ml-3 mb-4">
                    <img src="/public/asstes/avatar.png" alt="" />
                     <div >
                        <h2>Alen Max</h2>
                        <p>@alenMax</p>
                     </div>
                </div>
                <figure><img src="/public/asstes/nft_img04.jpg" alt="Shoes" /></figure>
                <div className="flex justify-between mt-4 mb-4 text-white">
                    <div className="ml-3 text-white">
                        <h4>Last Bid</h4>
                        <h1 className="font-semibold text-lg">1.002 <span className="text-purple-800 font-bold ">ETH</span></h1>
                    </div>
                    <button className="btn text-white  bg-purple-800 border-none mr-3 hover:bg-purple-700">Bid <AiOutlineArrowRight /></button>
                </div>
                
            </div>
            <div data-aos="zoom-in" className="card w-96 bg-base-100 shadow-xl mt-10">
                <div className="flex items-center gap-2 ml-3 mb-4 text-white">
                    <img src="/public/asstes/avatar03.png" alt="" />
                     <div>
                        <h2>JON Max</h2>
                        <p>@jonMax</p>
                     </div>
                </div>
                <figure><img src="/public/asstes/nft_img05.jpg" alt="Shoes" /></figure>
                <div className="flex justify-between mt-4 mb-4">
                    <div className="ml-3 text-white">
                        <h4>Last Bid</h4>
                        <h1 className="font-semibold text-lg">1.004 <span className="text-purple-800 font-bold ">ETH</span></h1>
                    </div>
                    <button className="btn text-white  bg-purple-800 border-none mr-3 hover:bg-purple-700">Bid <AiOutlineArrowRight /></button>
                </div>
                
            </div>
            <div data-aos="zoom-in" className="card w-96 bg-base-100 shadow-xl mt-10">
                <div className="flex items-center gap-2 ml-3 mb-4 text-white">
                    <img src="/public/asstes/avatar.png" alt="" />
                     <div>
                        <h2>Bibex Max</h2>
                        <p>@alenMax</p>
                     </div>
                </div>
                <figure><img src="/public/asstes/nft_img06.jpg" alt="Shoes" /></figure>
                <div className="flex justify-between mt-4 mb-4">
                    <div className="ml-3 text-white">
                        <h4>Last Bid</h4>
                        <h1 className="font-semibold text-lg">1.005 <span className="text-purple-800 font-bold ">ETH</span></h1>
                    </div>
                    <button className="btn text-white  bg-purple-800 border-none mr-3 hover:bg-purple-700">Bid <AiOutlineArrowRight /></button>
                </div>
                
            </div>
            <div data-aos="zoom-in" className="card w-96 bg-base-100 shadow-xl mt-10">
                <div className="flex items-center gap-2 ml-3 mb-4 text-white">
                    <img src="/public/asstes/avatar 2.png" alt="" />
                     <div>
                        <h2>RON Max</h2>
                        <p>@ronMax</p>
                     </div>
                </div>
                <figure><img src="/public/asstes/nft_img07.jpg" alt="Shoes" /></figure>
                <div className="flex justify-between mt-4 mb-4">
                    <div className="ml-3 text-white">
                        <h4>Last Bid</h4>
                        <h1 className="font-semibold text-lg ">1.001 <span className="text-purple-800 font-bold ">ETH</span></h1>
                    </div>
                    <button className="btn text-white  bg-purple-800 border-none mr-3 hover:bg-purple-700">Bid <AiOutlineArrowRight /></button>
                </div>
                
            </div>
            <div data-aos="zoom-in" className="card w-96 bg-base-100 shadow-xl mt-10">
                <div className="flex items-center gap-2 ml-3 mb-4 text-white">
                    <img src="/public/asstes/avatar03.png" alt="" />
                     <div>
                        <h2>helina</h2>
                        <p>@helina</p>
                     </div>
                </div>
                <figure><img src="/public/asstes/nft_img08.jpg" alt="Shoes" /></figure>
                <div className="flex justify-between mt-4 mb-4">
                    <div className="ml-3 text-white">
                        <h4>Last Bid</h4>
                        <h1 className="font-semibold text-lg">1.002 <span className="text-purple-800 font-bold ">ETH</span></h1>
                    </div>
                    <button className="btn text-white  bg-purple-800 border-none mr-3 hover:bg-purple-700">Bid <AiOutlineArrowRight /></button>
                </div>
                
            </div>
            </div>

        </>
    );
};

export default Trending;