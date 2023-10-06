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
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Name..."
                    onChange={
                        (e) => {
                            setDataComment(new DataComment(e.target.value, dataComment.content))
                        }
                    }
                    value={dataComment.username}
                ></input>
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Write a new post..."
                    onChange={
                        (e) => {
                            setDataComment(new DataComment(dataComment.username, e.target.value))
                        }
                    }
                    value={dataComment.content}
                ></input>
            </div>

            <div>
                <button
                    name={"submit"}
                    onClick={() => handleSubmit(dataComment)}
                >submit
                </button>
            </div>

        </div>
    )
}

export default Submit