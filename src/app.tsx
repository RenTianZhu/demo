import React, {useState} from 'react';

import DataComment from './datastruct.tsx'

import Submit from './submit.tsx';
import Comment from "./comment.tsx";

/**
 * When the submit button is clicked, the submitted content is converted into a comment, comment can be recursive
 */
export default function App() {
    const [comments, setComments] = useState<DataComment[]>([])
    return (
        <div className={"App"}>
            <h1 class="text-3xl font-bold underline">CIS 197 Community</h1>
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

