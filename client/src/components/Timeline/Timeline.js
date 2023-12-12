import "./Timeline.css";
import Post from "./Post/Post";

// TODO: Replace reads/writes to actual database reads/writes
const postDatabase = [
  {
    id: "wijnelsijdnf",
    user: "user1",
    image:
      "https://images.squarespace-cdn.com/content/v1/5e9dbdd8d0c17e5474826576/1611799214438-SWLYMLKLNVNMMP4LZCI9/italy-4093227.jpg?format=1500w",
    likes: 60000,
    liked: true,
  },
  {
    id: "wlidufhowjknekapwoe",
    user: "user2",
    image:
      "https://images.squarespace-cdn.com/content/v1/5e9dbdd8d0c17e5474826576/1611799214438-SWLYMLKLNVNMMP4LZCI9/italy-4093227.jpg?format=1500w",
    likes: 72000,
    liked: false,
  },
  {
    id: ".ljkfpgnoxwiejfoijpokdmf",
    user: "user3",
    image:
      "https://images.squarespace-cdn.com/content/v1/5e9dbdd8d0c17e5474826576/1611799214438-SWLYMLKLNVNMMP4LZCI9/italy-4093227.jpg?format=1500w",
    likes: 40000,
    liked: false,
  },
];

function Timeline() {
  return (
    <div className="main">
      <div className="wrapper">
        <div class="left-col">
          <div className="feed">
            {postDatabase.map((post) => {
              return <Post key={post.id} post={post} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
