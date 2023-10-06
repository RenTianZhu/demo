import React, {useState} from 'react';
import Submit from "./submit.tsx";
import DataComment from "./datastruct.tsx";

/**
 * Comment component, include: username, content, reply btn, submit area, like count
 */
function Comment({dataComment: dataComment}) {
    const [showSubmit, setShowSubmit] = useState<Boolean>(false)
    const [likeCount, setLikeCount] = useState<number>(0)
    const [comments, setComments] = useState<DataComment[]>([])
    return (
        <div className="shadow-md p-4">
            <div className="flex flex-row place-items-start justify-between">
                <div>
                    <div className="text-sky-400 break-words mt-2">{dataComment.username}</div>
                    <div className="break-all">{dataComment.content}</div>
                </div>
                <div className="flex flex-col items-center p-4">
                    <button className="text-green-500"
                            onClick={() => setLikeCount(likeCount + 1)}
                    >+
                    </button>
                    <h1>{likeCount}</h1>
                    <button className="text-red-500"
                            onClick={() => setLikeCount(likeCount - 1)}
                    >-
                    </button>
                </div>
            </div>
            {dataComment.depth < 3 &&
                <button className="text-white bg-green-500 hover:bg-green-700 px-2 py-2 ml-auto rounded"
                        name={"Comment"}
                        onClick={() => {
                            setShowSubmit(!showSubmit)
                        }}
                >Reply</button>}
            {showSubmit ? (<Submit
                handleSubmit={(callbackComment) => {
                    callbackComment.depth = dataComment.depth + 1
                    setComments(preComments => [...preComments, callbackComment])
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