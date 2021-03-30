import React from "react";
import Cover from "../../assets/img/bg.jpg";

export default function LeftSidebar({}) {
  return (
    <div className="left-sidebar-wrapper">
      <div className="left-sidebar-profile">
        <img className="left-sidebar-cover" src={Cover} />
        <img
          className="left-sidebar-avatar"
          src="https://mk0nationaltodayijln.kinstacdn.com/wp-content/uploads/2019/06/egg-1278x834.jpg"
        />
        <h2>John Doe</h2>
        <h4>CEO at Google</h4>
      </div>
      <div className="left-sidebar-network">
        <div className="left-sidebar-network-left">
          <p>Connections</p>
          <p className="left-sidebar-network-link">Grow your network</p>
        </div>
        <div className="left-sidebar-network-stats">
          <p>3589</p>
        </div>
      </div>
      <div className="left-sidebar-widget">
        <p>Groups</p>
        <p>Events</p>
        <p>Followed Hashtags</p>
      </div>
    </div>
  );
}
