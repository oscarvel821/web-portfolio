import { useState, useLayoutEffect } from "react";
import { createPortal } from "react-dom";

interface props {
    children : React.ReactElement;
    wrapperId : string;
}

const createWrapperAndAppendToBody = (wrapperId : string) => {
    if(!document) return null;

    const wrapperElement = document.createElement("div");
    wrapperElement.setAttribute('id', wrapperId);
    document.body.appendChild(wrapperElement);
    return wrapperElement;
}

const ReactPortal = ({children, wrapperId} : props) => {

    const [wrapperElement, setWrapperElement] = useState<HTMLElement>();

    useLayoutEffect(() => {
        let element = document.getElementById(wrapperId);
        let systemCreated = false;

        //if element is not found with wrapperId or wrapperId is not provided
        //create and append to the body
        if (!element) {
            systemCreated = true;
            element = createWrapperAndAppendToBody(wrapperId);
        }
        setWrapperElement(element!);
        
        return () => {
            if (systemCreated && element?.parentNode){
                element.parentNode.removeChild(element);
            }
        }
    }, [wrapperId])

    if(!wrapperElement) return null;

    return createPortal(children, wrapperElement);
}

export default ReactPortal;
