import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>My Awesome Blog of Awesomeness</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Create">New Blog</Link>
                {/* <a href="/">Home</a>
                <a href="/Create">New Blog</a> */}


            </div>

        </nav>


    );
}

export default Navbar;