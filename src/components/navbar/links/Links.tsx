import { FC, useEffect, useRef } from 'react'
import Link from "next/link"

interface link {
    title : string;
    path : string;
}

interface props {
    handleCollapse : () => void;
}

const Links : FC<props> = ({handleCollapse} : props) => {

    const linkRef = useRef<HTMLAnchorElement>(null);

    const links: link[] = [
        {
            title : "About",
            path : "/about"
        },
        {
            title : "Projects",
            path : "/projects"
        },
        {
            title : "Contact",
            path : "/contact"
        }
    ]

    return (
        <>
            {links.map((l, index) => (
                <li key={index} className='text-xl my-2 md:text-2xl md:my-0'>
                    <Link onClick={handleCollapse} className='hover:text-[#F0A273]' href={l.path} key={index}>{l.title}</Link>
                </li>
            ))}
        </>
    )
}

export default Links
