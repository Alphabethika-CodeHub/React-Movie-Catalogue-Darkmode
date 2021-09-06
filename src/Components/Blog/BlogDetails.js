import { useParams } from "react-router";
import useFetch from "../../Hook/useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch('http://localhost:2500/blogs/' + id);

    return (
        <div>
            <h1>Blog Detail - {id}</h1>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>{blog.author}</p>
                    <p>{blog.body}</p>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;