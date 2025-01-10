"use client"
import { FC, useState } from 'react'
import Links from "@/components/navbar/links/Links"
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar : FC = () => {

    const [collapse, setCollapse] = useState(false);

    const onCollapse = () => {
        console.log("here")
        setCollapse(!collapse);
    }

    return (
        <nav className='my-5'>
             <div className='flex flex-wrap items-center justify-end md:justify-center p-4'>
                {/* <div className=''>
                    <Link onClick={() => setCollapse(false)} href="/">
                        <Image src="/ov-high-resolution-logo-transparent.png" width={70} height={70} alt='logo'/>
                    </Link>
                </div> */}
                <div onClick={onCollapse} className=' md:hidden cursor-pointer hover:bg-slate-500 hover:rounded hover:bg-opacity-20 active:scale-90'>
                    <RxHamburgerMenu size={40}/>
                </div>
                <div className={`${collapse ? "" : "hidden"} w-full my-2 outline outline-1 outline-slate-600 rounded shadow-xl md:block md:w-auto md:outline-none md:shadow-none`}>
                    <ul className='flex flex-col items-center bg-gray-800 bg-opacity-30 p-2 md:flex-row md:space-x-8 md:bg-inherit'>
                        <Links handleCollapse={() => setCollapse(false)}/>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;