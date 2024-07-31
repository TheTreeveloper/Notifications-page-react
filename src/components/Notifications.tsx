import { useState } from "react";
import "./Notifications.css";

function Notifications() {
  const [isRead, setIsRead] = useState(false);
  const [messageCount, setMessageCount] = useState(3);
  const [mark, setMark] = useState("Mark all as read");

  const handleNotifications = () => {
    setIsRead(!isRead);
    if (!isRead) {
      setMessageCount(0);
      setMark("Mark all as unread");
    } else {
      setMessageCount(3);
      setMark("Mark all as read");
    }
  };

  return (
    <div className="parent-container">
      <div className="container">
        <div className="notification-count">
          <h1>Notifications</h1>
          <div className="message-count">{messageCount}</div>
        </div>
        <p onClick={handleNotifications} className="readMessages">
          {mark}
        </p>
      </div>
      {/* NOTIFICATION 
      <div className={`notification ${isRead ? "hidden" : ""}`}></div>*/}

      {/* MESSAGE NOTIFICATIONS */}
      <div className="user-notifications">
        {/* Mark Webber */}
        <div
          className={`unread notif-container ${
            isRead ? "hidden hide-background" : ""
          }`}
        >
          <img src="/images/avatar-mark-webber.webp" alt="Mark Webber" />
          <div className="content">
            <div className="text-content">
              <p>
                <strong>Mark Webber</strong> reacted to your recent post{" "}
                <span className="link">My first tournament today!</span>
              </p>
              <p className="timestamp">1m ago</p>
            </div>
            <div
              className={`notification notif-1 ${isRead ? "hidden" : ""}`}
            ></div>
          </div>
        </div>
        {/* Mark Webber end */}

        {/* Angela Gray start */}
        <div
          className={`unread notif-container ${
            isRead ? "hidden hide-background" : ""
          }`}
        >
          <img src="/images/avatar-angela-gray.webp" alt="Angela Gray" />
          <div className="content">
            <div className="text-content">
              <p>
                <strong>Angela Gray</strong> followed you
              </p>

              <p className="timestamp">1m ago</p>
            </div>
            <div
              className={`notification notif-2 ${isRead ? "hidden" : ""}`}
            ></div>
          </div>
        </div>
        {/* Angela Gray End */}

        {/* Jacob Thompson start */}
        <div
          className={`unread notif-container ${
            isRead ? "hidden hide-background" : ""
          }`}
        >
          <img src="/images/avatar-jacob-thompson.webp" alt="Angela Gray" />
          <div className="content">
            <div className="text-content">
              <p>
                <strong>Jacob Thompson</strong> has joined your group{" "}
                <span className="link">Chess Club</span>
              </p>

              <p className="timestamp">1m ago</p>
            </div>
            <div
              className={`notification notif-3 ${isRead ? "hidden" : ""}`}
            ></div>
          </div>
        </div>
        {/* Jacob Thompson End */}
        {/* MESSAGE NOTIFICATIONS END */}
      </div>
    </div>
  );
}

export default Notifications;
