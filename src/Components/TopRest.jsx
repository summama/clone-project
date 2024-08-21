import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Card from './Card';

export default function TopRest() {
    const [data, setData] = useState([])
    const [slide, setSlide] = useState(0)

    useEffect(()=> {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/top-restaurant-chains");
            
                // Check if the response is ok (status code 200-299)
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
        
                const apiData = await response.json();
                setData(apiData); // Correctly set the fetched data
            } catch (error) {
                console.log(error); // Handle errors
            } 
        };
    

        fetchData(); // Call the async function

    })

    const prevItems = () => {
        if (slide === 0) 
            return false    
        setSlide(slide - 3)
    }
    const nextItems = () => {
        // length of arr - no of elements shown on screen 
        if (data.length - 4 === slide) 
            return false    
        setSlide(slide + 3)
    }
    return (
    <>
        <div className="mx-auto max-w-[1100px]  mb-24">
                <div className="flex justify-between my-4">
                    <h1 className="text-lg font-bold"> Top Restaurant in Hyderabad </h1> 
                    <div className="flex gap-2">
                        <div  onClick={prevItems} className="cursor-pointer flex items-center justify-center bg-[#e2e2e7]  w-7 h-7 rounded-full mx-2">
                            <FaArrowLeft/>
                        </div> 
                        <div onClick={nextItems} className="cursor-pointer flex items-center justify-center bg-[#e2e2e7]  w-7 h-7 rounded-full mx-2">
                            <FaArrowRight/>
                        </div>
                    </div>
                </div>  
                <div className="flex gap-5 overflow-hidden">
                    {data.map( (d , i) =>{
                        return <div style={{ transform: `translateX(-${slide * 110}%)`}} >
                                    <Card {...d} key={i}/>
                                </div>
                    })}
                </div>
        </div>
    </>
    )
}
