import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export default function Category() {
    const [categories, setCategories] = useState([])
    const [slide, setSlide] = useState(0)

    useEffect(() => {
        // approach 1
        // const fetchData = async () => {
        //     try {
        //         const response = await fetch("http://localhost:5000/categories");
            
        //         // Check if the response is ok (status code 200-299)
        //         if (!response.ok) {
        //         throw new Error('Network response was not ok');
        //         }
        
        //         const data = await response.json();
        //         setCategories(data); // Correctly set the fetched data
        //     } catch (error) {
        //         console.log(error); // Handle errors
        //     } 
        // };
    
        //approach2
        // fetchData(); // Call the async function

        fetch("http://localhost:5000/categories")
        .then(response => response.json()) // Parse the JSON from the response
        .then(data => setCategories(data)) // Set the fetched data
        .catch(error => console.log(error)) // Handle errors
        
    
        // Cleanup function if needed (optional)
        return () => {
          // Any necessary cleanup code
        };
      }, []); // Empty dependency array means this runs once on mount

    const prevItems = () => {
        if (slide === 0) 
            return false    
        setSlide(slide - 3)
    }
    const nextItems = () => {
        // length of arr - no of elements shown on screen 
        if (categories.length - 8 === slide) 
            return false    
        setSlide(slide + 3)
    }
    return (
        <>
            <div className="mx-auto max-w-[1120px] ">
                <div className="flex justify-between my-4">
                    <h1 className="text-lg font-bold"> What's on your mind? </h1> 
                    <div className="flex gap-2">
                        <div  onClick={prevItems} className="cursor-pointer flex items-center justify-center bg-[#e2e2e7]  w-7 h-7 rounded-full mx-2">
                            <FaArrowLeft/>
                        </div> 
                        <div onClick={nextItems} className="cursor-pointer flex items-center justify-center bg-[#e2e2e7]  w-7 h-7 rounded-full mx-2">
                            <FaArrowRight/>
                        </div>
                    </div>
                </div>
                <div className="flex  overflow-hidden">     {/* images were going out of screen thats why overflow hidden */}
                        { categories.map((cat,index) => {
                            return(
                                <div style={{
                                        transform: `translateX(-${slide * 100}%)`
                                }} key={index} className="w-40 shrink-0" >
                                    <img src={"http://localhost:5000/images/"+cat.image } alt=''/>     
                                </div>
                        )})}
                </div>
                <hr className="my-6 border-2 "/>
            </div>
        </>
        
    )
}
