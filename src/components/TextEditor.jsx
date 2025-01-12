"use client"
import React, { useState } from 'react';
// import { Color } from '@tiptap/extension-color'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import Heading from '@tiptap/extension-heading'
import Highlight from '@tiptap/extension-highlight'
import Blockquote from '@tiptap/extension-blockquote'
import ListKeymap from '@tiptap/extension-list-keymap'
import ListItem from '@tiptap/extension-list-item'
import BulletList from '@tiptap/extension-bullet-list'
import { LuHeading1 } from "react-icons/lu";
import { LuHighlighter } from "react-icons/lu";
import { GrBlockQuote } from "react-icons/gr";
const TextEditor = ({details="",setDetails}) => {

    const [content, setContent] = useState(details);

    const editor = useEditor({
      extensions: [
        StarterKit.configure({
          heading: { levels: [1, 2, 3] }, // Support for headings
        }),
        Highlight,
        Blockquote,
        BulletList, ListItem, ListKeymap,
        Placeholder.configure({
            placeholder: 'Write something …',
            showOnlyWhenEditable: false,
        }),

        Heading.configure({
            levels: [1, 2, 3],
          }),
    
      ],
      content: details || '', // Default content
      onUpdate: ({ editor }) => {
        setContent(editor.getHTML()); // Update state with editor content
        setDetails(editor.getHTML()); // Update state with editor content
      },
    });
  
    if (!editor) {
      return null;
    }


    return (
        <>
        <div className='flex gap-8 place-content-end'>
        {/* <button
        type='button'
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
          >
            <LuHeading1 className='w-5 h-5'/>
          </button> */}
        
          <button
          type='button'
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          className={`px-3 py-1 border rounded ${
            editor.isActive('highlight') ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          <LuHighlighter  className='w-5 h-5'/>
        </button>


        <button
            type='button'
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={editor.isActive('blockquote') ? 'is-active' : ''}
          >
            <GrBlockQuote className='w-5 h-5'/>
          </button>


         
        </div>
        
        <EditorContent
        editor={editor}
        placeholder='offer details'
        className=" focus:outline-none focus:border-none border p-2 rounded-md h-40 overflow-y-auto"
        />


        
        </>
    );
};

export default TextEditor;