import { useEffect, useState } from "react";
import BlogList from "./BlogList";


const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id != id);
        setBlogs(newBlogs);
    }

    // useEffect takes a function as an argument which will run upon every render and re-render
    useEffect(() => {
        console.log('Use effect ran');
        console.log(blogs);

    });



    return (
        <div className="Home">
            <BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete} />
            {/* blogs above is a prop used to pass data to child component*/}

        </div >
    );
}

export default Home;