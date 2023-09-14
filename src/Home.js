import { useState, useEffect } from "react";
import BlogsList from "./BlogsList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "welcome to my first blog",
      body: "hey gang this is my first blog",
      author: "Madhav",
      id: 1
    },
    {
      title: "welcome to my first blog",
      body: "hey gang this is my first blog",
      author: "Nani",
      id: 2
    },
    {
      title: "welcome to my first blog",
      body: "hey gang this is my first blog",
      author: "Taruna",
      id: 3
    }
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);

    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("Use effect ran");
    console.log(blogs);
  }, []);

  return (
    <div className="home">
      <BlogsList blogs={blogs} handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
