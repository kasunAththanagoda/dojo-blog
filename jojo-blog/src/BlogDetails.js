import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./customHooks/useFetch";

const BlogDetails = () => {
    const {id}= useParams();
    const {data : blog,error,isPending}= useFetch("http://localhost:8000/blogs/"+id);
    const history=useHistory();

    const handleDelete=()=>{
        fetch("http://localhost:8000/blogs/"+blog.id,{
            method : "DELETE",
        })
        .then(()=>{
            history.push("/");
        })
    };

    return ( 
        <div className="blog-details">
            {isPending && <div>loading....</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>written by : {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete Blog</button>
                </article>
            )}
            
        </div>
     );
}
 
export default BlogDetails;