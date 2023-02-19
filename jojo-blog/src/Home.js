import { useState } from "react";

const Home = () => {
    const [name,setName]=useState('kasun');
    const [age,setAge]=useState('25');

    const handleClick = () =>{
        setName('prabath');
        setAge('30');
    }
    

    return ( 
        <div className="Home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>click me</button>
        </div>
     );
}
 
export default Home;