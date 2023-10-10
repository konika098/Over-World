import { useEffect, useState } from "react";

import BidsCard from "./BidsCard";
const Bid = () => {
    const [useBid ,setUseBid]=useState([])
    const FetchBid=()=>{
        fetch("Bid.json")
        .then(res=>{
            return res.json()
        })
        .then(useBid =>{
            setUseBid(useBid)
        })
    }
    useEffect(()=>{
        FetchBid()
    },[])
    return (
        <>

    
     <div data-aos="zoom-out-right" 
     data-aos-duration="1500" className="lg:grid md:grid md:grid-cols-1 hidden lg:grid-cols-2 xl:grid-cols-3  mx-auto pt-20 gap-7">
            {
                useBid.map(Bids=><BidsCard key={Bids.id} Bids={Bids}></BidsCard>)
            }
        </div>
     

       






        </>
    );
};

export default Bid;