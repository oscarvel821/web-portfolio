import { FC, useRef } from 'react'
import { usePathname } from 'next/navigation';
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
    const pathname = usePathname();

    const links: link[] = [
        {
            title : "Home",
            path: "/"
        },
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
            path : "/contact",
        }
    ]

    return (
        <>
            {links.map((l, index) => (
                <li key={index} className={`text-xl ${pathname === l.path ? "font-med md:text-2xl" : "font-light md:text-xl"} my-2  md:my-0`}>
                    <Link onClick={handleCollapse} className={`rounded-3xl ${pathname === l.path ? "bg-[#212529]" : ""} p-4`} href={l.path} key={index}>{l.title}</Link>
                </li>
            ))}
        </>
    )
}

export default Links
