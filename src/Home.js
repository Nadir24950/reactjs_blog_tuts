// import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
    const { data:blogs, isPending, error} = useFetch("http://localhost:8000/blogs")
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Lodaing ...</div>}
            {blogs && <Bloglist blogs={blogs} />}
        </div>
    );
};

export default Home;
// when handeling an event with a function, we don't usually invoke it, we pass in a refrence ( without the ())
// if we add () it will run it wihtout clicking

//using hooks (function) Use___
//
