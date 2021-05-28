import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title , setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("mario");
    const [isPending, setIsPending] = useState(false);

    const history  = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title,  body, author}; 
        setIsPending(true);
        fetch("http://localhost:8000/blogs", {
            method : "post",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(blog)
        }).then(() => {
            console.log("new blog addedd")
        });

        history.push("/");
    };
    return (  
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Blog title : </label>
                <input type="text" value = { title } onChange = { (e) => setTitle(e.target.value) } required/>

                <label htmlFor="">Blog body : </label>
                <textarea  required value= { body } onChange = {(e) => setBody(e.target.value)}></textarea>

                <label htmlFor="">Blog author : </label>
                <select name="" id="" value = { author} onChange = {(e) => setAuthor(e.target.value)}>
                    <option value="mario">Mario</option>
                    <option value="nadir">Nadir</option>
                </select>
                {!isPending &&  <button>Add Blog</button>}
                { isPending && <button disabled>Adding Blog ...</button> }
            </form>
        </div>
    );
}
 
export default Create;

