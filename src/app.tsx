import React, {useState} from 'react';
import "tailwindcss/tailwind.css"

import DataComment from './datastruct.tsx'

import Submit from './submit.tsx';
import Comment from "./comment.tsx";

/**
 * When the submit button is clicked, the submitted content is converted into a comment, comment can be recursive
 */
export default function App() {
    const [comments, setComments] = useState<DataComment[]>([])
    return (
        <div className="container max-w-lg mx-auto mt-10">
            <h1 className="text-lg text-center mb-4">🧋 KASHYAP456 COMMENTING PLATFORM 🧋</h1>
            <Submit handleSubmit={(dataComment) => {
                setComments(preComments => [...preComments, dataComment])
            }}/>
            {
                comments.map((dataComment) => (
                    <Comment dataComment={dataComment}/>
                ))
            }
        </div>
    );
}

