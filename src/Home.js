import { useEffect, useState } from "react";
import BlogList from "./BlogList";


const Home = () => {
    const [blogs, setBlogs] = useState(null);

    const [name, setName] = useState('mario');

    const [isLoading, setIsLoading] = useState(true);

    // useEffect takes a function as an argument which will run upon every render and re-render
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setBlogs(data);
                    setIsLoading(false);
                });
        }, 1000);
    }, []);
    // [] only runs on first render; ie, we only fetch the data once

    return (
        <div className="home">
            {/* {!blogs && <p>loading</p>} */}
            {/* I used above instead of the much longer isLoading way */}
            {isLoading && <p>Loading...</p>}
            {blogs && <BlogList blogs={blogs} title='All Blogs' />}
        </div >
    );
}

export default Home;