import Banner from "../../Component/BannerSection/Banner";
import Bid from "../../Component/BidSection/Bid";

import RoadMap from "../../Component/RoadMap/RoadMap";
import Services from "../../Component/Services/Services";
import Footer from "../Footer/Footer";



const Home = () => {
    return (
        <>
            <Banner/>
           <div class="w-full h-screen bg-[url('https://i.ibb.co/wgMCXTZ/bg.jpg')] bg-cover bg-center ">
           <Bid/>
          
            <RoadMap/>
            <Services/>
            <Footer/>
           </div>
        </>
    );
};

export default Home;