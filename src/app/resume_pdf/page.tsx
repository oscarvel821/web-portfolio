// 'use client'
// import { PDFViewer, Document, View, Page, Text } from "@react-pdf/renderer";
// import { useEffect, useState } from "react";
// import { pdfjs } from "react-pdf";
// import {Document, Page, Outline} from "react-pdf"
// import 'react-pdf/dist/Page/AnnotationLayer.css';
// import 'react-pdf/dist/Page/TextLayer.css';

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

// const options = {
//     cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
//     standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts`
//   };

const ResumePdf = () => {

    // const [pageNumber, setPageNumber] = useState<number>(1);

    // const onItemClick = ({pageNumber : itemPageNumber} : {pageNumber : number}) : void => {
    //     console.log("in function")
    //     setPageNumber(itemPageNumber);
    // }

    return (
        <div className="grow border flex">
            {/* <Document file="/resume.pdf" options={options} >
                <Outline onItemClick={() => {}}/>
                <Page pageNumber={1}/>
            </Document> */}
                {/* <iframe src=”” width=”100%” height=”500px” /> */}
                <iframe className="" src="/resume_V10.pdf" width="100%" loading="lazy" title="Resume" allowFullScreen={true}/>
        </div>
    )
}

export default ResumePdf;
