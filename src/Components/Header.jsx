import React, { useState } from 'react'
import { RxCaretDown } from 'react-icons/rx'
import { IoIosSearch } from 'react-icons/io'
import { CiDiscount1 } from 'react-icons/ci'
import "../index.css"


export default function Header() {

    const [toggle, setToggle] = useState(false)
    
    const handleSideBar = () => {
        setToggle(true)
        console.log(toggle)
    }

    const hideSideBar = (e) => {
        e.stopPropagation() // stop event propogation to the parents (event bubbling)
        setToggle(false)
    }

    const navLinks = [
        {
            icon: <IoIosSearch/>,
            name: "Search"
        },
        {
            icon: <CiDiscount1/>,
            name: "offers"
        },
        {
            icon: "",
            name: "Help"
        },
        {
            icon: "",
            name: "Offers",
            sup: "new"
        },
        {
            icon: "",
            name: "Signin"
        },
        {
            icon: "",
            name: "Cart",
            sup: "(0)"
        }
    ]
    return (
        <>
        <div className="blackScreen  w-full h-full fixed duration-500 "  onClick={hideSideBar}
            style={{
                    opacity: toggle ? 1 : 0,
                    visibility:toggle ? "visible" : "hidden"  // blackscreen hinder thehandlesideBar handler
                }}>
        </div>
        <div className="w-[400px] h-full bg-white absolute duration-500"
            style={{
                    left: toggle ? "0%" : "-100%"
                }}>
        </div>
        
        <header className="p-4 shadow-xl ">
                <div className="mx-auto  max-w-6xl flex items-center gap-4" >
                    <img src="/images/logo.png" alt="memon pizza" className='w-[100px]'/>
                    <span className='text-lg'>
                        <p className='inline underline decoration-4 decoration-black-500 text-xl cursor-pointer mr-2'>Memon Pizza</p>
                        Hyderabad <RxCaretDown onClick={handleSideBar} className="cursor-pointer inline text-3xl text-orange-500 "/> 
                    </span>
                    <nav className="flex gap-8 ml-auto font-semibold">
                        {
                            navLinks.map(
                                (navLink, index) => {
                                    return <li key={index} className="list-none hover:text-orange-500 text-lg flex items-center content-center">
                                        {navLink.icon} 
                                        {navLink.name}
                                        <sup>{navLink.sup}</sup>
                                    </li>
                            })
                        }
                    </nav>
                </div>
        </header>
        </>
    )
}
