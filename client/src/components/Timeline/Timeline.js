import "./Timeline.css";
import Post from "./Post/Post";
import { useState, useEffect } from "react";
import axios from "axios";



function Timeline() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/getPosts").then((response) => {
      setPosts(response.data);
    });
  }, []);
  
  return (
    <div className="main">
      <div className="wrapper">
        <div class="left-col">
          <div className="feed">
            {posts.map((post) => {
              return <Post key={post.id} post={post} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
