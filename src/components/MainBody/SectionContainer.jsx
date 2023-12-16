import React from 'react';
import Image from "next/legacy/image";
import { motion } from "framer-motion"
import { HiOutlineTrash } from 'react-icons/hi2';


const SectionContainer = ({ dispatch, decreaseCount, _id, value }) => {
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
                src='/ComponentsBannerImg/banner1.png'
            />

            <div className='absolute text-center inset-y-1/4 w-2/5 left-[30%]'>
                <motion.input
                    drag
                    dragConstraints={dragConstraints}
                    defaultValue={value ? value : 'gift guide'}
                    disabled
                    className='content-border capitalize text-[13.412px] text-[#69764A] font-semibold focus:outline-none py-1 px-2'
                />
                {/* gift guide
                </motion.input> */}
                <motion.h3
                    drag
                    dragConstraints={dragConstraints}
                    className='content-border text-[36.224px] text-[#536136] font-bold my-[2px]'
                >
                    Here’s to Joy
                </motion.h3>
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