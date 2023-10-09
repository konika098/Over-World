import Banner from "../../Component/BannerSection/Banner";
import Bid from "../../Component/BidSection/Bid";

import RoadMap from "../../Component/RoadMap/RoadMap";
import Services from "../../Component/Services/Services";
import Trending from "../../Component/Trending/Trending";
import Footer from "../Footer/Footer";



const Home = () => {
    return (
        <>
            <Banner />
            <div className="w-full min-h-screen bg-[url('https://i.ibb.co/wgMCXTZ/bg.jpg')] bg-cover bg-center ">
                <div className="w-full min-h-screen h-full  flex flex-col  justify-center items-center backdrop-brightness-50">
                    <Bid />

                    <RoadMap />
                    <Trending />
                    <Services />
                    
                </div>

            </div>
            <Footer />
        </>
    );
};

export default Home;