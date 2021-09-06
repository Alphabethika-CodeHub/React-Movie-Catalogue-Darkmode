import useFetch from "../Hook/useFetch";
// import CardMovie from "./CardMovie";

// LOCAL DATA
import BlogList from "./BlogList";

const Body = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:2500/blogs');

    // LOCAL DATA
    // const [blogs, setBlogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    // ]);

    // LOCAL DATA
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    return (
        <div className="p-8">
            <div>
                {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}
                {blogs && <BlogList dataBlogs={blogs} title="All Blog List!"></BlogList>}
                {/* LOCAL DATA */}
                {/* <BlogList handle={handleDelete} dataBlogs={blogs} title="All Blog List!"></BlogList> */}
                {/* <br /> */}
                {/* <BlogList handle={handleDelete} dataBlogs={blogs.filter((blog) => blog.author === "mario")} title="Mario's Blog List!"></BlogList> */}
                {/* <CardMovie /> */}
            </div>
        </div>
    );
}

export default Body;