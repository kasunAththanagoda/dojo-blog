import { useEffect, useState } from "react";
import BlogList from "./componenets/BlogList";

const Home = () => {
    
const [blogs,setBlogs]=useState();
const [isPending,setIsPending]=useState(true);



//   const handleDelete=(id)=>{
//     console.log("blog id:",id)
//     const newBlogs=blogs.filter((blog)=>blog.id!==id);
//     setBlogs(newBlogs);
// };

useEffect(()=>{
    console.log("use effects running")
    fetch("http://localhost:8000/blogs")
    .then(res=>{
        return res.json();
    })
    .then(data=>{
        console.log("data :",data)
        setBlogs(data);
        setIsPending(false);
    })
},[]);


    return ( 
        <div className="Home">
            {isPending && <div>Loading....</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" ></BlogList>}
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author==="mario")} title="mario's Blogs"></BlogList> */}
           
        </div>
     );
}
 
export default Home;