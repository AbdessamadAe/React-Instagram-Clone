import "./Post.css";
import { useCallback, useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { FcLikePlaceholder } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { FcLike } from "react-icons/fc";
import { AiOutlineSmile } from "react-icons/ai";
import { use } from "express/lib/router";

//post_id, post_date , picture, caption, account_id, likes

function Post({ post }) {
  const [showComments, setShowComments] = useState(false);

  const [liked, setLiked] = useState(post.liked);
  const [numberOfLikes, setNumberOfLikes] = useState(post.likes);

  const likePost = useCallback(() => {
    setNumberOfLikes((numberOfLikes) => numberOfLikes + 1);
    setLiked(true);
  }, []);
  const unlikePost = useCallback(() => {
    setNumberOfLikes((numberOfLikes) => numberOfLikes - 1);
    setLiked(false);
  }, []);

  return (
    <div className="post">
      <div className="user__info">
        <div className="user__avatar">
          <FaRegCircleUser />
        </div>
        <p class="username">{post.user_name}</p>
      </div>
      <img class="post-image" src={post.picture} alt="post" />
      <div class="post-content">
        <div class="reaction-wrapper">
          <div class="reaction-icon">
            {!liked ? (
              <FcLikePlaceholder onClick={() => likePost()} />
            ) : (
              <FcLike onClick={() => unlikePost()} />
            )}
          </div>
          <div
            class="reaction-icon"
            onClick={() => setShowComments((show) => !show)}
          >
            <FaRegComment />
          </div>
          <div class="reaction-icon">
            <FiSend />
          </div>
        </div>
        <p class="likes">{numberOfLikes} Likes</p>
      </div>
      {showComments ? (
        <div className="comment-section">
          <div className="comment-emoji">
            <AiOutlineSmile />
          </div>
          <input
            className="comment-input"
            type="text"
            placeholder="Add a comment..."
          />
        </div>
      ) : null}
    </div>
  );
}

export default Post;
