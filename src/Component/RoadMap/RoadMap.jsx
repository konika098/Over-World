import { Link } from "react-router-dom";

const RoadMap = () => {
    return (
       <>
      
<div className="text-white text-center font-semibold mt-44   ">
<h1 className="text-3xl  xl:text-5xl italic ">A LOOK INTO ROADMAPS SEASONS</h1>
<p className="lg:text-base xl:text-2xl mt-10 italic font-bold">with Season 1 Ending with our play and duis element sollicitudin is yaugue euismods Nulla ulla player-focused updates games from Mobile app and Enjoy</p>

 <img data-aos="fade-down" data-aos-easing="linear"
     data-aos-duration="1500" className="mx-auto mt-10" src="/public/asstes/roadmap.png" alt="" />
 <Link to="/contact" className="btn bg-purple-800 mt-7 text-white">roadmap</Link>
</div>
       
       </>
    );
};

export default RoadMap;