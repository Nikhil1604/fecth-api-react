import { useEffect,useState } from "react";
import React from "react";
const Joke = () => {
     const [data, setJoke] = useState("");
     const[loading,setLoading]=useState(false);
     const [count,setCount]=useState(0)

     async function fetchJoke() {
      const response = await fetch("https://api.publicapis.org/entries");
      const kkk = await response.json();
      console.log(kkk.entries[count])
       setJoke(kkk.entries[count]);
    }
      const increse = () =>{
        setCount((prev)=> (prev+1))
        console.log(count)
      }
    useEffect(() => {
      fetchJoke();
    }, [increse]);
  
    return (
      <div>
        <h1>Joke of the day</h1>
        <button onClick={increse}>Click</button>
        <p>{data?.Description}</p>
        <p>{data.Category}</p>
        {/* <p>{data?.length}</p> */}
      </div>
    );
  };
  export default Joke;
  