import BlogList from "./componenets/BlogList";
import useFetch from "./customHooks/useFetch";

const Home = () => {
    const {data : blogs,isPending,error}= useFetch("http://localhost:8000/blogs");




    return ( 
        <div className="Home">
            {isPending && <div>Loading....</div>}
            {error && <div>{error}</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" ></BlogList>}
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author==="mario")} title="mario's Blogs"></BlogList> */}
           
        </div>
     );
}
 
export default Home;