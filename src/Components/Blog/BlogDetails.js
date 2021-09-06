import { useHistory, useParams } from "react-router";
import useFetch from "../../Hook/useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch('http://localhost:2500/blogs/' + id);
    const history = useHistory();
    const handleDelete = () => {
        fetch('http://localhost:2500/blogs/' + blog.id, {
            method: "DELETE"
        }).then(() => {
            history.push('/')
        })
    }

    return (
        <div className="p-12">
            <h1>Blog Detail - {id}</h1>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>{blog.author}</p>
                    <p>{blog.body}</p>
                    <button
                        onClick={handleDelete}
                        className="py-2 px-5 rounded-md bg-red-400"
                    >Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;