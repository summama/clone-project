import React, {useState,useEffect} from 'react'
import Card from './Card';

export default function OnlineDelivery() {
    const [data, setData] = useState([])
    
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

    return (
        <>  
        <div className="mx-auto max-w-[1100px]  ">
                <div className="flex justify-between my-4">
                    <h1 className="text-lg font-bold"> Restaurant with online delievery in Hyderabad </h1> 
                    </div>
        <div className="max-w-6xl mx-auto flex gap-3 my-4 border border-red-500">
            <div className="p-3 rounded-md shadow">Filter</div>
            <div className="p-3 rounded-md shadow">Sort By</div>
        </div>
        <div className="grid grid-cols-4 gap-3">
            {data.map( (d , i) =>{
                return <Card {...d} key={i}/>
                })}
        </div>
        </div>
        </>
    )
}
