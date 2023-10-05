import { useState } from "react";

const Create = () => {
    const [title,setTitle]=useState("");
    const [author,setAuthor]=useState("mario");
    const [body,setBody]=useState("");

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
                <label>Blog title : </label>
                <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}></input>

                <label>Blog body : </label>
                <textarea required value={body} onChange={(e)=>setBody(e.target.value)}></textarea>

                <label>Blog author : </label>
                <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <br></br>
                <button>Add Blog</button>
            </form>

            {/* ---{title}--{body}--{author} */}
        </div>

     )
}
 
export default Create;