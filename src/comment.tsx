import React, {useState} from 'react';
import Submit from "./submit.tsx";
import DataComment from "./datastruct.tsx";

/**
 * Comment component, include: username, content, reply btn, submit area, like count
 */
function Comment({dataComment: dataComment}) {
    const [showSubmit, setShowSubmit] = useState<Boolean>(false)
    // const [likeCount, setLikeCount] = useState<Number>(0)
    const [comments, setComments] = useState<DataComment[]>([])
    return (
        <div style={{marginLeft: '50px', border: '1px solid black'}}>
            <div>{dataComment.username}</div>
            <div>{dataComment.content}</div>
            <button
                name={"Comment"}
                onClick={() => {
                    setShowSubmit(!showSubmit)
                }}
            >Reply
            </button>
            {showSubmit ? (<Submit
                handleSubmit={(dataComment) => {
                    setComments(preComments => [...preComments, dataComment])
                }}
            />) : null}
            {
                comments.map((dataComment) => (
                    <Comment dataComment={dataComment}/>
                ))
            }
        </div>
    )
}

export default Comment