'use client';

import { useEffect, useRef, useState } from 'react';
import Resume from './pdf';
import { useSelector } from 'react-redux';
import { CgSpinner } from 'react-icons/cg';
import { usePDF } from '@react-pdf/renderer';
import { Document, Page, pdfjs } from 'react-pdf';
import { FaDownload, FaEye } from 'react-icons/fa6';

// import 'react-pdf/dist/Page/AnnotationLayer.css';
// import 'react-pdf/dist/Page/TextLayer.css';

// Set up PDF worker
if (typeof window !== 'undefined') {
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
}

const Loader = () => (
    <div className="flex min-h-96 w-full items-center justify-center">
        <CgSpinner className="mx-auto mt-16 animate-spin text-center text-4xl text-primary-400 md:text-5xl" />
    </div>
);

const preview = url => {
    window.open(
        url,
        'Resume Preview',
        `toolbar=no, location=no, menubar=no, scrollbars=no, status=no, titlebar=no, resizable=no, width=600, height=800, left=${window.innerWidth / 2 - 300}, top=100`,
    );
};

const Preview = () => {
    const parentRef = useRef(null);
    const resumeData = useSelector(state => state.resume);
    const document = <Resume data={resumeData} />;
    const [instance, updateInstance] = usePDF({ document });
    const [isDownloading, setIsDownloading] = useState(false);

    useEffect(() => {
        if (resumeData.saved) {
            updateInstance(document);
        }
    }, [resumeData.saved]);

    const handleContextMenu = (e) => {
        e.preventDefault();
    };

    const handleDownload = async () => {
        try {
            setIsDownloading(true);
            const pdfBlob = await instance.blob;
            const reader = new FileReader();
            
            reader.onloadend = async () => {
                const base64data = reader.result;
                
                // Create a form and submit it
                const form = document.createElement('form');
                form.method = 'POST';
                form.action = '/api/download';
                
                // Add the PDF data
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = 'pdfData';
                input.value = base64data;
                form.appendChild(input);
                
                // Add the form to the document and submit it
                document.body.appendChild(form);
                form.submit();
                document.body.removeChild(form);
                
                setIsDownloading(false);
            };
            
            reader.readAsDataURL(pdfBlob);
        } catch (error) {
            console.error('Error downloading PDF:', error);
            setIsDownloading(false);
        }
    };

    return (
        <div ref={parentRef} className="relative w-full md:max-w-[24rem] 2xl:max-w-[28rem]">
            {instance.loading ?
                <Loader />
            :   <Document loading={<Loader />} file={instance.url}>
                    <Page
                        pageNumber={1}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        loading={<Loader />}
                        width={parentRef.current?.clientWidth}
                    />
                </Document>
            }

            {!instance.loading && (
                <div className="mt-4 flex justify-around">
                    <button 
                        onClick={() => preview(instance.url)} 
                        onContextMenu={handleContextMenu}
                        className="group flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-2 text-sm font-medium text-gray-200 transition-all hover:border-blue-500 hover:bg-gray-800 hover:text-white"
                    >
                        <span>Preview</span>
                        <FaEye className="transition-transform group-hover:scale-110" />
                    </button>
                    <button
                        onClick={handleDownload}
                        disabled={isDownloading}
                        onContextMenu={handleContextMenu}
                        className="group flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-2 text-sm font-medium text-gray-200 transition-all hover:border-green-500 hover:bg-gray-800 hover:text-white disabled:opacity-50"
                    >
                        <span>{isDownloading ? 'Downloading...' : 'Download'}</span>
                        <FaDownload className="transition-transform group-hover:scale-110" />
                    </button>
                </div>
            )}
        </div>
    );
};

// const Preview = () => {
//     const resumeData = useSelector(state => state.resume);
//     const [data, setData] = useState(resumeData);

//     useEffect(() => {
//         if (resumeData.saved) setData(resumeData);
//     }, [resumeData.saved]);

//     return (
//         <div className="hidden h-[40rem] w-[28rem] md:block">
//             <PDFViewer className="h-full w-full" showToolbar={true}>
//                 <Resume data={data} />
//             </PDFViewer>
//         </div>
//     );
// };

export default Preview;
