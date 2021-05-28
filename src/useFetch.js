import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        // use effect doesn't need to be stored in a variable
        const abortCont = new AbortController(); //to cleanup and stop the fetch function when it's not on page
        fetch(url, { signal : abortCont.signal })
            .then((res) => {
                if (!res.ok) {
                    throw Error("could not fetch the data for that resources");
                }
                return res.json();
            })
            .then((data) => {
                setError(null);
                setData(data);
                setIsPending(false);
            })
            .catch((err) => {
                if (err.name === "AbortError") {
                    console.log('fetch aborted');
                }else {
                    setIsPending(false);
                    setError(err.message);
                }
                
            });
        return () => abortCont.abort();
    }, [url]);
    return { data, isPending, error };
};

export default useFetch;
