import { Link } from "react-router-dom";

const BlogList = (props) => {
    const blogs = props.dataBlogs;
    const title = props.title;

    // LOCAL DATA
    // const handleDelete = props.handle;

    return (
        <div className="">
            <h1>{title}</h1>
            <hr className="mt-2 mb-3" />
            <div className="grid grid-cols-5 gap-5">
                {blogs.slice(0, 100).map((blog) => (
                    <div className="shadow rounded-lg hover:shadow-2xl bg-white" key={blog.id}>
                        <hr />
                        <div className="p-3">
                            <h1>{blog.title}</h1>
                            <hr className="my-2" />
                            <p>{blog.body.slice(0, 100)}</p>
                            {/* <span className="flex justify-between">Written by {blog.author} <button onClick={() => handleDelete(blog.id)} className="text-red-400 hover:shadow">Delete</button></span> */}
                            <span className="flex justify-between">Written by {blog.author} <Link className="hover:shadow" to={`/blogs/${blog.id}`}>Details</Link></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BlogList;