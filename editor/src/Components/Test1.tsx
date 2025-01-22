import React,{useEffect,useRef} from "react";
import * as monaco from "monaco-editor";
import "monaco-editor/min/vs/editor/editor.main.css";

import Editor from '@monaco-editor/react';

const Test1: React.FC<{initalCode?:string; language?:string; theme?:string;}>=({
    // initalCode = '// test1',
    // language='javascript',
    // theme='vs-dark'
}) => {
    const editorRef=useRef<HTMLDivElement | null>(null);

    return(
        <>
            {/* <div 
                ref={editorRef}
                style={{width:'200px', height:'500px'}}
            /> */}
            <Editor 
                height="300px"
                width='300px'
                defaultLanguage='javascript'
                defaultValue='// plzzzzz'
                theme='vs-dark'
            />
        </>
    )
};

export default Test1;