import React from 'react'
import "../index.css"
export default function Card(props) {
    return (
        <div className="w-64 shrink-0  overflow-hidden mb-3 ">
            <div className="group h-44 relative rounded-2xl overflow-hidden" >
            <img className="group-hover:scale-110 duration-200 object-cover  h-full w-full" src={"http://localhost:5000/images/"+props.image} alt="" />
                <div className="overlay  w-full h-full absolute top-0 flex items-end text-2xl p-2 font-bold text-white ">{props.offer}</div>
            </div>
            <div className="mt-3  text-xl font-bold">
                {props.title}
            </div>
            <div className="mt-3  text-xl font-bold">
                🌟 {props.rating}
                <span className="ml-3"> {props.minTime} - {props.maxTime} mins </span>
            </div>
            <div className='text-slate-400'>
                {props.name}
                <br /> {props.place}
            </div>
            
        </div>
    )
}
