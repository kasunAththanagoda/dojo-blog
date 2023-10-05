import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("mario");
  const [body, setBody] = useState("");
  const [isPending,setIsPending]=useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blogObject = { title, body, author };
    console.log("add : ", blogObject);

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blogObject)
    })
    .then(()=>{
        console.log("new blog added")
        setIsPending(false);
    })
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title : </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>

        <label>Blog body : </label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label>Blog author : </label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <br></br>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button>Adding Blog....</button>}

      </form>

      {/* ---{title}--{body}--{author} */}
    </div>
  );
};

export default Create;
