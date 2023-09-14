const BlogsList = ({ blogs, handleDelete }) => {
  //const blogs = props.blogs;

  return (
    <div className="blogsList">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h3>{blog.title}</h3>
          <h6>Written by {blog.author}</h6>
          <p>{blog.body}</p>
          <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogsList;
