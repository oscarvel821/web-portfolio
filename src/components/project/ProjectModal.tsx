import React, { useEffect } from "react";
import ReactPortal from "@/components/portal/ReactPortal";
import { IoMdClose } from "react-icons/io";

interface props {
    children : React.ReactNode;
    show : boolean;
    handleClose : () => void;
}

const ProjectModal = ({children, show, handleClose} : props) => {

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () : void => {
            document.body.style.overflow = "unset";
        };
    }, [show])
    
    if (!show) return null;

    return (
        <ReactPortal wrapperId="react-portal-modal-container">
            <>
                <div className="fixed top-0 left-0 w-screen h-screen z-50 flex justify-center items-center bg-neutral-800/30">
                    <div className="rounded flex flex-col box-border w-3/4 md:w-1/2 max-w-screen-md max-h-screen overflow-hidden p-5 glass">
                        <button className="self-end" onClick={handleClose}><IoMdClose size={35}/></button>
                        <div>
                            {children}
                        </div>
                    </div>
                </div>
            </>
        </ReactPortal>
    )
}

export default ProjectModal
