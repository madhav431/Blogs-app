import React, { useState } from "react";
import {useHistory} from 'react-router-dom';

function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Madhav");
  const [isPendig, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log("adding new blog");
      setIsPending(false);
      history.push('/');
    });
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author: </label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Madhav">Madhav</option>
          <option value="Nani">Nani</option>
          <option value="Taruna">Taruna</option>
        </select>
        {!isPendig && <button>Add Blog</button>}
        {isPendig && <button disabled>Adding Blog...</button>}

      </form>
    </div>
  );
}

export default Create;
