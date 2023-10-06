import React, {useState} from 'react';
import Submit from "./submit.tsx";
import DataComment from "./datastruct.tsx";

/**
 * Comment component, include: username, content, reply btn, submit area, like count
 */
function Comment({dataComment: dataComment}) {
    const [showSubmit, setShowSubmit] = useState<Boolean>(false)
    const [likeCount, setLikeCount] = useState<Number>(0)
    const [comments, setComments] = useState<DataComment[]>([])
    return (
        <div className="shadow-md p-4">
            <div className="text-sky-400 break-words mt-2">{dataComment.username}</div>
            <div className="break-all">{dataComment.content}</div>
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