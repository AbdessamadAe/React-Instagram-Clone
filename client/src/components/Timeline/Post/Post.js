import "./Post.css";
import { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { FcLike } from "react-icons/fc";



function Post() {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(12000);

  function likePost() {
    setLiked(!liked);
    if (liked) {
      setLikes(likes - 1);
    }
    else {
      setLikes(likes + 1);
    }
  }


  const [posts, setPosts] = useState([
    {
      user: "user1",
      image:
        "https://images.squarespace-cdn.com/content/v1/5e9dbdd8d0c17e5474826576/1611799214438-SWLYMLKLNVNMMP4LZCI9/italy-4093227.jpg?format=1500w",
      likes: 60

    },
    {
      user: "user2",
      image:
        "https://images.squarespace-cdn.com/content/v1/5e9dbdd8d0c17e5474826576/1611799214438-SWLYMLKLNVNMMP4LZCI9/italy-4093227.jpg?format=1500w",
      likes: 72
    }
  ]);

  return (
    <div className="feed">
      {posts.map((post) => (

        <div className="post">
          <div className="user__info">
            <div className="user__avatar">
              <FaRegCircleUser />
            </div>
            <p class="username" >{post.user}</p>
          </div>
          <img class="post-image" src={post.image} alt="post" />
          <div class="post-content">
            <div class="reaction-wrapper">
              <div class="reaction-icon">
                {!liked ? (
                  <IoIosHeartEmpty onClick={likePost} />
                ) : (
                  <FcLike onClick={likePost} />
                )
                }
              </div>
              <div class="reaction-icon" >
                <FaRegComment />
              </div>
              <div class="reaction-icon">
                <FiSend />
              </div>
            </div>
            <p class="likes">{likes} Likes</p>

          </div>
        </div>
      ))}
    </div>
  );
}

export default Post;