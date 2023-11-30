import "./Timeline.css";
import Post from "./Post/Post";

function Timeline() {
  return (
    <div className="main">
      <div className="wrapper">
      <div class="left-col">
      <Post />
      <Post />
      <Post />
      </div>
      </div>
    </div>
  );

}

export default Timeline;