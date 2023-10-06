import { Link } from "react-router-dom";

const RoadMap = () => {
    return (
       <>
       {/* <div class="flex h-screen justify-center items-center flex-col">
    <div
        class="w-full h-screen bg-[url('https://i.ibb.co/wgMCXTZ/bg.jpg')] bg-cover bg-center">
        <div class="w-full h-full flex  justify-center items-center backdrop-brightness-50">
                <span class="text-white text-4xl w-1/2 text-center">Here is an example of black overlay on an image</span>
        </div>
    </div>
</div> */}
<div className="text-white text-center font-semibold mt-44">
<h1 className=" text-5xl italic ">A LOOK INTO ROADMAPS SEASONS</h1>
<p className="text-2xl mt-10 italic font-bold">with Season 1 Ending with our play and duis element sollicitudin is yaugue euismods Nulla ulla player-focused updates games from Mobile app and Enjoy</p>

 <img className="mx-auto mt-9" src="/public/asstes/roadmap.png" alt="" />
 <Link to="/contact" className="btn bg-purple-300 mt-5">roadmap</Link>
</div>
       
       </>
    );
};

export default RoadMap;