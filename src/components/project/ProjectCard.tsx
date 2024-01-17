"use client"
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { FaLongArrowAltRight } from "react-icons/fa";

interface props {
    img : string;
    title : string;
    text : string;
    url : string;
}

const cropText = (text : string, size : number) => {
    if(text.length > size)
        return text.substring(0, size - 1) + "..."

    return text
}

const ProjectCard = ({img, title, text, url} : props) => {

    // const [projectModalShow, setProjectModalShow] = useState<boolean>(false);

    // const handleClose = () => {
    //     setProjectModalShow(false);
    // }


    return (
        <div className='sm:max-w-full md:max-w-md lg:max-w-sm glass rounded-lg shadow outline outline-1 outline-slate-600/30'>
            <img className="rounded-t-lg" src={img}/>
            <div className='font-RobotoFlex p-2'>
                <h3 className='text-2xl my-2'>
                    {title}
                </h3>
                <h4 className='text-xl text-opacity-70 my-2'>
                    {cropText(text, 150)}
                </h4>
                <a className="inline-block bg-[#F0A273] rounded-xl p-3 shadow hover:shadow-lg hover:bg-[#D18B4D] active:bg-[#B47634] my-2" href={url} target="_blank">Read More On Github</a>
                {/* <button onClick={() => setProjectModalShow(true)} className="bg-[#F0A273] rounded-xl p-3  shadow hover:shadow-lg hover:bg-[#D18B4D] active:bg-[#B47634] my-2">Read More</button> */}
            </div>
            {/* {projectModalShow && (
                <ProjectModal show= {projectModalShow} handleClose={handleClose}>
                    <img className="rounded-t-lg mt-3" src={img}/>
                    <div className='font-RobotoFlex p-2'>
                        <h3 className='text-2xl my-2'>
                            {title}
                        </h3>
                        <h4 className='text-xl text-opacity-70 my-2 overflow-scroll'>
                            {text}
                        </h4>
                        <a className="inline-flex items-center cursor-pointer hover:scale-105 transform transition-transform" href="https://www.github.com/" target="_blank">
                            <span className="text-xl me-1">View Github Page</span> 
                            <FaLongArrowAltRight size={40} />
                        </a>
                    </div>
                </ProjectModal>
            )} */}
        </div>
    )
}

export default ProjectCard;
