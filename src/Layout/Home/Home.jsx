import Banner from "../../Component/BannerSection/Banner";
import Bid from "../../Component/BidSection/Bid";

import RoadMap from "../../Component/RoadMap/RoadMap";



const Home = () => {
    return (
        <>
            <Banner/>
           <div class="w-full h-screen bg-[url('https://i.ibb.co/wgMCXTZ/bg.jpg')] bg-cover bg-center ">
           <Bid/>
          
            <RoadMap/>
           </div>
        </>
    );
};

export default Home;