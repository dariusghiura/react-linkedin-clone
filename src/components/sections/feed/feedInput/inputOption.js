import React from "react";

export default function InputOption({ Icon, Name, color }) {
  return (
    <div className="feed-input-option-wrapper">
      {Icon && <Icon className="feed-input-icon" style={{ color: color }} />}
      <h3>{Name}</h3>
    </div>
  );
}
