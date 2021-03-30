import React from "react";

export default function PostOption({ Icon, Name }) {
  return (
    <div className="feed-post-option">
      {Icon && <Icon className="feed-input-icon" color="action" />}
      <h3>{Name}</h3>
    </div>
  );
}
