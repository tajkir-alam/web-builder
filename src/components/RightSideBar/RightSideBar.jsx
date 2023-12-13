"use client";
import React, { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi2';
import { Editor } from "react-draft-wysiwyg";
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const RightSideBar = () => {
    const [showComponents, setShowComponents] = useState(true);


    const [editorState, setEditorState] = useState(
        EditorState.createWithContent(ContentState.createFromText(''))
    );

    const handleEditorChange = (newEditorState) => {
        setEditorState(newEditorState);
        console.log(newEditorState);
        if (newEditorState) {
            const contentState = newEditorState.getCurrentContent();
            const contentRaw = convertToRaw(contentState);
            // newEditorState(JSON.stringify(contentRaw));
        }
    };


    const toolbarOptions = {
        options: ['inline', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'image'],
        inline: {
            options: ['bold', 'italic', 'underline', 'strikethrough'],
        },
        blockType: {
            inDropdown: true,
            options: ['Normal', 'H1', 'H2', 'H3', 'Blockquote'],
        },
        fontSize: {
            options: [10, 12, 14, 16, 18, 24, 30, 36],
        },
        fontFamily: {
            options: ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'],
        },
        list: {
            inDropdown: true,
        },
        textAlign: {
            inDropdown: true,
            options: ['left', 'center', 'right', 'justify'],
        },
        colorPicker: {
            colors: ['rgb(0,0,0)', 'rgb(255,0,0)', 'rgb(0,255,0)', 'rgb(0,0,255)'],
        },
        link: {
            inDropdown: true,
        },
        image: {
            uploadEnabled: true,
            alt: { present: true, mandatory: false },
            defaultSize: {
                height: 'auto',
                width: 'auto',
            },
        },
    };


    return (
        <div className='primary-bg h-screen py-[25px] px-[15px] overflow-hidden'>
            <div className='mb-4 flex items-center justify-between'>
                <h5>Basic Components</h5>
                <button onClick={() => setShowComponents(!showComponents)}>
                    <HiChevronDown className={`${showComponents ? 'rotate-0' : 'rotate-180'} duration-300`} />
                </button>
            </div>
            <h6 className='text-[#918f8f] text-sm'>Text *</h6>


            <Editor
                editorState={editorState}
                onEditorStateChange={handleEditorChange}
                wrapperClassName="demo-wrapper h-[130px] text-black rounded-lg"
                editorClassName="demo-editor bg-[#2F3031] text-white rounded-lg scrollbar-hidden no-scrollbar border border-[#575757] px-2"
                toolbarClassName="demo-toolbar"
                toolbar={toolbarOptions}
            />

        </div>
    );
};

export default RightSideBar;