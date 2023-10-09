import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShopCards = ({ data }) => {
    const { image, name, ctg_name, price } = data
    
        const notify = () => toast("Successfully Purcess your product!");
    return (
        <>
          
            <div data-aos="fade-up"
     data-aos-duration="3000" className="card card-compact w-96  bg-base-100 text-white shadow-xl mx-auto  ">
                <figure  className="w-full "><img  className="w-full" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className="text-lg">{ctg_name}</p>
                    <p className="text-lg">${price}</p>
                    <div className="card-actions justify-end">
                        <button onClick={notify} className="btn bg-purple-800 text-white">Buy Now</button>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </>
    );
};

export default ShopCards;