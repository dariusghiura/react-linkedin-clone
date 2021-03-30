import React from "react";
import FeedInput from "./feedInput/feedInput";
import FeedPost from "./feedPost/feedPost";

export default function Feed({}) {
  return (
    <div className="feed-section-wrapper">
      <FeedInput />
      <div className="feed-posts-wrapper">
        <FeedPost />
        <FeedPost />
        <FeedPost />
        <FeedPost />
        <FeedPost />
      </div>
    </div>
  );
}
