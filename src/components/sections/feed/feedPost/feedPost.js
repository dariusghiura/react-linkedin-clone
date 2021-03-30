import React from "react";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import CommentOutlinedIcon from "@material-ui/icons/CommentOutlined";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";
import PostOption from "./postOption";

export default function FeedPost({}) {
  return (
    <div className="feed-post">
      <div className="feed-post-profile">
        <img src="https://mk0nationaltodayijln.kinstacdn.com/wp-content/uploads/2019/06/egg-1278x834.jpg" />
        <div className="feed-post-profile-info">
          <h2>John Doe</h2>
          <h4>CEO at Google</h4>
          <h4>2w</h4>
        </div>
      </div>
      <div className="feed-post-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          cursus magna ipsum, eget fringilla arcu vulputate id. Vestibulum
          sodales dictum malesuada. Praesent pharetra finibus dui, a dapibus
          lacus aliquam nec. Praesent quis tortor pharetra, feugiat diam eu,
          consectetur nunc. Donec vel tortor augue. Sed et cursus lorem. Nullam
          dui elit, pulvinar sit amet odio et, sagittis porttitor magna. Sed
          tincidunt urna nec ex aliquam euismod. Curabitur lobortis purus sit
          amet quam bibendum, non euismod nisi finibus. Integer at fringilla
          est, non pretium libero. Maecenas mattis ipsum quam, id imperdiet
          mauris pretium ut. Nullam eu ultrices diam, vitae dictum libero.
          Aliquam erat volutpat. Fusce vitae elementum libero. Vivamus commodo
          augue vel feugiat ultricies.
        </p>
      </div>
      <div className="feed-post-option-wrapper">
        <PostOption Icon={ThumbUpOutlinedIcon} Name="Like" />
        <PostOption Icon={CommentOutlinedIcon} Name="Comment" />
        <PostOption Icon={ShareIcon} Name="Share" />
        <PostOption Icon={SendIcon} Name="Send" />
      </div>
    </div>
  );
}
