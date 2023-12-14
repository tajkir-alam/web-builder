"use client";
import React, { useState } from 'react';
import { AiOutlineFontSize } from "react-icons/ai";
import { HiChevronDown, HiOutlinePhoto } from 'react-icons/hi2';

const BasicComponents = () => {
    const [showComponents, setShowComponents] = useState(true);
    const [componentsHidden, setComponentsHidden] = useState(false);

    const showComponentMenu = () => {
        setShowComponents(!showComponents);
        setTimeout(() => {
            setComponentsHidden(!componentsHidden);
        }, 350);
    }


    return (
        <section>
            <div className='mb-4 flex items-center justify-between'>
                <h5>Basic Components</h5>
                <button onClick={showComponentMenu}>
                    <HiChevronDown className={`${showComponents ? 'rotate-0' : 'rotate-180'} duration-300`} />
                </button>
            </div>
            <div className={`${!showComponents && '-translate-y-16 opacity-0 invisible'} ${componentsHidden && 'hidden'} translate-y-0 grid grid-cols-3 gap-[6px] duration-300`}>
                <div className="bg-[#3e3f41] hover:bg-[#4f5053] rounded flex flex-col items-center py-3 cursor-pointer">
                    <AiOutlineFontSize />
                    <p className='text-xs whitespace-nowrap mt-2'>Text</p>
                </div>
                <div className="bg-[#3e3f41] hover:bg-[#4f5053] rounded flex flex-col items-center py-3 cursor-pointer">
                    <HiOutlinePhoto />
                    <p className='text-xs whitespace-nowrap mt-2'>Image</p>
                </div>
                <div className="bg-[#3e3f41] hover:bg-[#4f5053] rounded flex flex-col items-center py-3 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                        <g clipPath="url(#clip0_2_139)">
                            <path d="M7.26667 12.5V10.7M7.26667 10.7V4.70001C7.26667 4.38175 7.3931 4.07652 7.61815 3.85148C7.84319 3.62643 8.14841 3.50001 8.46667 3.50001C8.78493 3.50001 9.09016 3.62643 9.3152 3.85148C9.54025 4.07652 9.66667 4.38175 9.66667 4.70001V9.50001H13.6903C14.7823 9.50001 15.6667 10.3844 15.6667 11.4764V12.5C15.6667 13.9322 15.0977 15.3057 14.0851 16.3184C13.0724 17.3311 11.6988 17.9 10.2667 17.9H9.66667C8.39364 17.9 7.17274 17.3943 6.27256 16.4941C5.37239 15.5939 4.86667 14.373 4.86667 13.1C4.86667 12.4635 5.11953 11.853 5.56962 11.4029C6.01971 10.9529 6.63015 10.7 7.26667 10.7ZM11.4667 7.10001H13.8667C14.6623 7.10001 15.4254 6.78394 15.988 6.22133C16.5506 5.65872 16.8667 4.89566 16.8667 4.10001C16.8667 3.30436 16.5506 2.54129 15.988 1.97869C15.4254 1.41608 14.6623 1.10001 13.8667 1.10001H5.46667C4.67103 1.10001 3.90796 1.41608 3.34535 1.97869C2.78275 2.54129 2.46667 3.30436 2.46667 4.10001C2.46667 4.89566 2.78275 5.65872 3.34535 6.22133C3.90796 6.78394 4.67103 7.10001 5.46667 7.10001" stroke="#EAEAEA" strokeWidth="1.2" />
                        </g>
                        <defs>
                            <clipPath id="clip0_2_139">
                                <rect width="18" height="18" fill="white" transform="translate(0.666687 0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p className='text-xs whitespace-nowrap mt-2'>Button</p>
                </div>
                <div className="bg-[#3e3f41] hover:bg-[#4f5053] rounded flex flex-col items-center py-3 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                        <path d="M7.64581 2.75H4.83331C4.53494 2.75 4.2488 2.86853 4.03782 3.0795C3.82684 3.29048 3.70831 3.57663 3.70831 3.875V15.125C3.70831 15.4234 3.82684 15.7095 4.03782 15.9205C4.2488 16.1315 4.53494 16.25 4.83331 16.25H7.64581C7.94418 16.25 8.23033 16.1315 8.44131 15.9205C8.65229 15.7095 8.77081 15.4234 8.77081 15.125V3.875C8.77081 3.57663 8.65229 3.29048 8.44131 3.0795C8.23033 2.86853 7.94418 2.75 7.64581 2.75ZM7.64581 15.125H4.83331V3.875H7.64581V15.125ZM13.8333 2.75H11.0208C10.7224 2.75 10.4363 2.86853 10.2253 3.0795C10.0143 3.29048 9.89581 3.57663 9.89581 3.875V15.125C9.89581 15.4234 10.0143 15.7095 10.2253 15.9205C10.4363 16.1315 10.7224 16.25 11.0208 16.25H13.8333C14.1317 16.25 14.4178 16.1315 14.6288 15.9205C14.8398 15.7095 14.9583 15.4234 14.9583 15.125V3.875C14.9583 3.57663 14.8398 3.29048 14.6288 3.0795C14.4178 2.86853 14.1317 2.75 13.8333 2.75ZM13.8333 15.125H11.0208V3.875H13.8333V15.125Z" fill="#EAEAEA" />
                    </svg>
                    <p className='text-xs whitespace-nowrap mt-2'>Columns</p>
                </div>
                <div className="bg-[#3e3f41] hover:bg-[#4f5053] rounded flex flex-col items-center py-3 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                        <path d="M12.75 2.75H5.25C3.59315 2.75 2.25 4.09315 2.25 5.75V13.25C2.25 14.9069 3.59315 16.25 5.25 16.25H12.75C14.4069 16.25 15.75 14.9069 15.75 13.25V5.75C15.75 4.09315 14.4069 2.75 12.75 2.75Z" stroke="#EAEAEA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className='text-xs whitespace-nowrap mt-2'>Box</p>
                </div>
                <div className="bg-[#3e3f41] hover:bg-[#4f5053] rounded flex flex-col items-center py-3 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                        <path d="M9.66669 5L3.66669 8L9.66669 11L15.6667 8L9.66669 5" stroke="#EAEAEA" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3.66669 11L9.66669 14L15.6667 11" stroke="#EAEAEA" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className='text-xs whitespace-nowrap mt-2'>Section</p>
                </div>
            </div>
        </section>
    );
};

export default BasicComponents;