import { useLoaderData } from "react-router-dom";
import ShopCards from "./ShopCards";



const Shop = () => {
    const shopData =useLoaderData()
    console.log(shopData)
    return (
       <>
      
       <div class="w-full min-h-screen bg-[url('https://i.ibb.co/Lhp6cjX/pexels-photo-3165335.jpg')] bg-cover bg-center"> 
        <div className="w-full min-h-screen h-full  flex flex-col  justify-center items-center backdrop-brightness-50">
        <h1 className="text-white italic font-semibold text-8xl mt-20">Buy Your Dreams 🥰</h1>
        
       <div className="mt-48 mb-10">
       <h1 className="text-white text-3xl mb-7">RELATED PRODUCTS</h1>
       <div className="flex container mx-auto gap-4 ">
            
            {
                shopData.map(data=><ShopCards key={data.id} data={data}></ShopCards>)
            }
        </div>
       </div>
        </div>
       </div>
       </>
    );
};

export default Shop;