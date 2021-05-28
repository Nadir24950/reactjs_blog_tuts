import { Link } from "react-router-dom"

const NoteFound = () => {
    return (  
        <div className="not-found">
            <h2>404 : Page not found</h2>
            <Link to ="/">Back to homepage</Link>
        </div>
    );
}
 
export default NoteFound;