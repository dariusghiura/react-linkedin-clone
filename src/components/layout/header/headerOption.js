import React from "react";
import Avatar from "@material-ui/core/Avatar";

export default function HeaderOption({ text, Icon, avatar }) {
  return (
    <div className="header-option-wrapper">
      {Icon && <Icon className="header-option-icon" />}
      {avatar && (
        <Avatar className="header-option-picture" alt="Profile" src={avatar} />
      )}
      <p>{text}</p>
    </div>
  );
}
