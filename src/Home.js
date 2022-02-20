import { useEffect, useState } from "react";
import BlogList from "./BlogList";


const Home = () => {
    const [blogs, setBlogs] = useState(null);

    const [name, setName] = useState('mario');

    // useEffect takes a function as an argument which will run upon every render and re-render
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
            });
    }, []);
    // [] only runs on first render; ie, we only fetch the data once

    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title='All Blogs' />}
            {/* if (blogs != null) {
                <BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete} />
            } */}
            {/* Why doesn't above if stmt work as an alternative to the "blog &&" way? */}
        </div >
    );
}

export default Home;