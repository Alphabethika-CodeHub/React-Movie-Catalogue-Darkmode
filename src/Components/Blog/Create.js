import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('Mario');
    const [body, setBody] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, author, body };
        setIsPending(true);
        fetch('http://localhost:2500/blogs', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New Blog Added!');
            setIsPending(false);
            // history.go(-1);
            history.push('/');
        });
    }

    return (
        <div>
            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title: </label>
                <input value={title} onChange={(e) => { setTitle(e.target.value) }} className="border" type="text" required />
                <label>Blog Author: </label>
                <select value={author} onChange={(e) => { setAuthor(e.target.value) }} className="border">
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                    <option value="Luigi">Luigi</option>
                </select>
                <label>Blog Body: </label>
                <textarea value={body} onChange={(e) => setBody(e.target.value)} className="border" required></textarea>

                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled> Adding Blog Please Wait...</button>}

            </form>
        </div>
    );
}

export default Create;