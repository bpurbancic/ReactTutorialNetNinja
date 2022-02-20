import { useEffect, useState } from "react";
import BlogList from "./BlogList";


const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect takes a function as an argument which will run upon every render and re-render
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                if (!res.ok) {
                    throw Error('Fetch failed.');
                }
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setIsLoading(false);
            })
    }, []);
    // [] only runs on first render; ie, we only fetch the data once

    return (
        <div className="home">
            {error && <p>{error}</p>}
            {isLoading && <p>Loading...</p>}
            {blogs && <BlogList blogs={blogs} title='All Blogs' />}
        </div >
    );
}

export default Home;