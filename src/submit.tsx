import React, {useState} from 'react';
import DataComment from './datastruct.tsx'

/**
 * submit area, include: username input, content input, submit btn
 */
function Submit(
    {handleSubmit}
) {
    const [dataComment, setDataComment] = useState<DataComment>(new DataComment("", ""))
    return (
        <div className="container mx-auto mb-4">
            <input
                className="box-border h-10 w-full rounded appearance-none border border-neutral mb-2"
                type="text"
                placeholder="Name..."
                onChange={
                    (e) => {
                        setDataComment(new DataComment(e.target.value, dataComment.content))
                    }
                }
                value={dataComment.username}
            ></input>

            <textarea
                className="box-border p-2 w-full rounded border border-red-900 mb-2"
                placeholder="Write a new post..."
                onChange={
                    (e) => {
                        setDataComment(new DataComment(dataComment.username, e.target.value))
                    }
                }
                value={dataComment.content}
            ></textarea>

            <button
                className="text-white bg-blue-500 hover:bg-blue-700 px-2 py-2 ml-auto rounded"
                name={"submit"}
                onClick={() => {
                    if (!dataComment.username.trim() || !dataComment.content.trim()) {
                        alert("Name & Post content must not be null")
                        return
                    }
                    handleSubmit(dataComment)
                }}
            >submit
            </button>

        </div>
    )
}

export default Submit