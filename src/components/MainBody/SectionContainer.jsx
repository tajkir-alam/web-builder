import React from 'react';
import Image from "next/legacy/image";
import { motion } from "framer-motion"
import { HiOutlineTrash } from 'react-icons/hi2';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseCount } from '@/redux/features/sectionCount/sectionCountSlice';
import { updatedText } from '@/redux/features/textEditor/textEditorSlice';


const SectionContainer = ({ _id }) => {
    const dispatch = useDispatch();
    const { textValue } = useSelector((state) => state.textEditor);
    const { bannerImgSrc } = useSelector((state) => state.heroBannerImg);

    // Utility function to strip HTML tags
    const stripHtmlTags = (htmlString) => {
        const removeTags = new DOMParser().parseFromString(htmlString, 'text/html');
        return removeTags.body.textContent || "Here’s to Joy";
    }

    const dragConstraints = {
        top: -100,
        left: -100,
        right: 100,
        bottom: 100,
    }

    return (
        <>
            <Image
                alt='Hero'
                layout='fill'
                src={bannerImgSrc}
                draggable={false}
            />

            <div className='absolute text-center inset-y-1/4 w-2/5 left-[30%]'>
                <motion.p
                    drag
                    dragConstraints={dragConstraints}
                    // value={stripHtmlTags(textValue)}
                    // onChange={(e) => dispatch(updatedText(e.target.value))}
                    className='content-border bg-transparent capitalize text-[13.412px] text-[#69764A] font-semibold focus:outline-none py-1 px-2'
                >
                    gift guide
                </motion.p>

                <motion.input
                    drag
                    dragConstraints={dragConstraints}
                    value={stripHtmlTags(textValue)}
                    onChange={(e) => dispatch(updatedText(e.target.value))}
                    className='content-border bg-transparent text-[36.224px] text-[#536136] w-full font-bold my-[2px] focus:outline-none py-1 px-2'
                />

                <motion.p
                    drag
                    dragConstraints={dragConstraints}
                    className='content-border text-[8.567px] text-[#7A8365] mb-[14px]'
                >
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                </motion.p>

                <motion.div
                    drag
                    dragConstraints={dragConstraints}
                    className='content-border'
                >
                    <button className='bg-[#536136] hover:bg-[#627241] py-[6px] text-sm px-[14px] rounded capitalize duration-300 active:scale-95'>
                        Shop Gifts
                    </button>
                </motion.div>
            </div>

            {/* Section remove button */}
            <button
                onClick={() => dispatch(decreaseCount(_id))}
                className='absolute -top-4 right-4 text-xl p-2 bg-[#F1614A] rounded-full hover:bg-[#719df0] opacity-0 group-hover:opacity-100 duration-300'>
                <HiOutlineTrash />
            </button>
        </>
    );
};

export default SectionContainer;