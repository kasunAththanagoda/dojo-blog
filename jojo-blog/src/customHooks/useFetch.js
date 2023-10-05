import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("use effects running");
    fetch(url)
      .then((res) => {
        console.log("res ", res);
        if (!res.ok) {
          setIsPending(false);
          throw Error("could not fetch the data..");
        }
        return res.json();
      })
      .then((data) => {
        console.log("data :", data);
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        console.log(err.message);
        setIsPending(false);
        setError(err.message);
      });
  }, [url]);

   return {data,isPending,error};
};

export default useFetch;
