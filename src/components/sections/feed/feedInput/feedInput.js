import React from "react";
import InputOption from "./inputOption";
import PhotoIcon from "@material-ui/icons/Photo";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EventIcon from "@material-ui/icons/Event";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";

export default function FeedInput({}) {
  return (
    <div className="feed-input-wrapper">
      <div className="feed-input-top">
        <img
          className="feed-input-avatar"
          src="https://mk0nationaltodayijln.kinstacdn.com/wp-content/uploads/2019/06/egg-1278x834.jpg"
        />
        <input type="text" placeholder="Start a post" />
      </div>
      <div className="feed-input-option">
        <InputOption Icon={PhotoIcon} Name="Photo" color="#70B5F9" />
        <InputOption Icon={YouTubeIcon} Name="Video" color="#7FC15E" />
        <InputOption Icon={EventIcon} Name="Event" color="#E7A33E" />
        <InputOption
          Icon={CalendarViewDayIcon}
          Name="Write Article"
          color="#F5987E"
        />
      </div>
    </div>
  );
}
