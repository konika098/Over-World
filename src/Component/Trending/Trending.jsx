import { useEffect, useState } from "react";
import TrendingCards from "./TrendingCards";

const Trending = () => {
    const [trendData,setTrendData]=useState([])
    const FetchTrendData=()=>{
        fetch("Trending.json")
        .then(res=>{
            return res.json()
        })
        .then(trendData=>{
            setTrendData(trendData)
        })
      
    }
    useEffect(()=>{
        FetchTrendData()
    },[])
    console.log(trendData)
    return (
        <>
        <div className="flex text-3xl lg:text-5xl font-semibold italic items-center gap-4 mt-9 text-white">
        <h1>TOP TRENDING</h1>
        <img className="w-7 h-10 lg:w-10 lg:h-14" src="https://i.ibb.co/KGSmY3L/fire.png" alt="" />
        </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5  ">
          
            {
                trendData.map(data=><TrendingCards key={data.id} datas={data}></TrendingCards>)
            }
            </div>

        </>
    );
};

export default Trending;