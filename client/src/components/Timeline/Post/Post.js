import "./Post.css";
import { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { FcLikePlaceholder } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { FcLike } from "react-icons/fc";
import { AiOutlineSmile } from "react-icons/ai";




function Post() {
  const [liked, setLiked] = useState(false);

  const [posts, setPosts] = useState([
    {
      user: "user1",
      image:
        "https://images.squarespace-cdn.com/content/v1/5e9dbdd8d0c17e5474826576/1611799214438-SWLYMLKLNVNMMP4LZCI9/italy-4093227.jpg?format=1500w",
      likes: 60000,
      showComment: false

    },
    {
      user: "user2",
      image:
        "https://images.squarespace-cdn.com/content/v1/5e9dbdd8d0c17e5474826576/1611799214438-SWLYMLKLNVNMMP4LZCI9/italy-4093227.jpg?format=1500w",
      likes: 72000,
      showComment: false
    },
    {
      user: "user3",
      image:
        "https://images.squarespace-cdn.com/content/v1/5e9dbdd8d0c17e5474826576/1611799214438-SWLYMLKLNVNMMP4LZCI9/italy-4093227.jpg?format=1500w",
      likes: 40000,
      showComment: false
    }
  ]);

  function likePost(postIndex) {
    setLiked(!liked);
    setPosts(posts.map((post, index) => {
      if (index === postIndex) {
        if (liked) {
          return {
            ...post,
            likes: post.likes - 1
          }
        } else {
          return {
            ...post,
            likes: post.likes + 1
          }
        }
      }
      return post;
    }))
  }

  function commentPost(postIndex) {
    setPosts(posts.map((post, index) => {
      if (index==postIndex){
        return {
          ...post,
          showComment: !post.showComment
        }
      }
      return post;
    }))
  }


  return (
    <div className="feed">
      {posts.map((post, index) => (
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
                    <FcLikePlaceholder onClick={() => likePost(index)}  />
                  ) : (
                    <FcLike onClick={() => likePost(index)} />
                  )
                  }
                </div>
                <div class="reaction-icon" onClick={() => commentPost(index)}  >
                  <FaRegComment />
                </div>
                <div class="reaction-icon">
                  <FiSend />
                </div>
              </div>
              <p class="likes">{post.likes} Likes</p>
            </div>
            {post.showComment ? (
              <div className="comment-section">
                <div className="comment-emoji">
                  <AiOutlineSmile />
                </div>
                <input className="comment-input" type="text" placeholder="Add a comment..." />
              </div>
            ) : null}
        </div>
      ))}
    </div>
  );
}

export default Post;