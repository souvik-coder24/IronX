import React, { useRef, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { Puff } from 'react-loader-spinner';
import logoAI from '../../assets/images/IronX.png';

const Popup = ({ isOpen, onClose, responseHtml, onDownload, isLoading }) => {
    const popupRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                onClose();
            }
        };
        
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div
                ref={popupRef}
                className="bg-black p-4 sm:p-6 md:p-8 rounded-lg shadow-lg w-[90%] sm:w-[80%] md:w-[70%] max-w-4xl relative flex flex-col"
            >
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex gap-3 sm:gap-4">
                    <IoClose className="text-lg sm:text-xl cursor-pointer" onClick={onClose} />
                </div>
                <div className="flex items-center justify-between mb-4 border-b border-gray-200 pb-2">
                    <img src={logoAI} alt="AI-Logo" className="w-20 h-10 sm:w-40 sm:h-10" />
                </div>
                <div className="mt-4 max-h-[60vh] sm:max-h-[70vh] md:max-h-[80vh] overflow-y-auto recipe-content">
                    {isLoading ? (
                        <div className="flex flex-col items-center justify-center h-full">
                            <Puff color="#FBBF24" height={90} width={90} />
                            <p className="mt-4 text-sm text-slate-500 text-center">The recipe is being carefully prepared. Please give us a moment to provide you with the best possible result.</p>
                        </div>
                    ) : (
                        <div className="recipe-html" dangerouslySetInnerHTML={{ __html: responseHtml }} />
                    )}
                </div>
                <div className="mt-4 flex justify-end">
                    {!isLoading && (
                        <button
                            onClick={onDownload}
                            className="bg-yellow-500 hover:bg-yellow-600 text-black p-2 rounded-md font-semibold text-sm"
                        >
                            Download PDF
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Popup;
