import { ReactNode } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

interface SocialMediaLinks {
    title: string;
    icon : ReactNode;
    path : string;
}

const SocialMediaIcons = () => {

    const links : SocialMediaLinks[] = [
        {
            title : "LinkedIn",
            icon : <FaLinkedin className="text-[#0a66c2] hover:text-[#084d99]" size={40}/>,
            path : "https://www.linkedin.com/"
        },
        {
            title : "Github",
            icon : <FaGithub className="text-[#636362] hover:text-[#4d4d4d] mx-3" size={40}/>,
            path : "https://github.com/"
        }
    ]

    return (
        <div className="flex my-5">
            {links.map((l, index) => (
                <a key={l.title} href={l.path} target="_blank">
                    {l.icon}
                </a>
            ))}
        </div>
    )
}

export default SocialMediaIcons;