import { AiOutlineTeam} from "react-icons/ai";
import { AiOutlineSketch} from "react-icons/ai";
import { AiOutlineSetting} from "react-icons/ai";



const Services = () => {
    return (
        <>
        <h1 className="text-4xl font-bold italic text-center mt-4">OUR POWERFUL SERVICES DONE ON TIME</h1>
        <hr className="bg-purple-400 w-1/5  mt-4 mx-auto h-1"/>
        <div className="grid grid-cols-3 gap-5 mt-10 items-center">
            <div className="text-3xl font-semibold">
                <AiOutlineTeam ></AiOutlineTeam>
                <h1 >Expert Teams</h1>
                <p></p>
            </div>
            <div className="text-3xl  font-semibold">
                <AiOutlineSketch></AiOutlineSketch>
                <h2 >Year Experience</h2>
                <p></p>
            </div>
            <div className="text-3xl font-semibold">
                <h1 >Best NFT Game</h1>
                <p></p>
            </div>
            <div className="text-3xl font-semibold">
                <AiOutlineSetting></AiOutlineSetting>
                <h1 >Worldwide Client</h1>
                <p></p>
            </div>
            <div className="text-3xl font-semibold">
              
                <h1 >Free Online Game</h1>
            </div>
            <div className="text-3xl font-semibold">
              
               
                <h1 >Best Product</h1>
            </div>
        </div>
        
        </>
    );
};

export default Services;