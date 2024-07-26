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
    <div>
      <div className="container">
        <div className="notification-count">
          <h1>Notifications</h1>
          <div className="message-count">{messageCount}</div>
        </div>
        <p onClick={handleNotifications} className="readMessages">
          {mark}
        </p>
      </div>
      <div className={`notification ${isRead ? "hidden" : ""}`}></div>
    </div>
  );
}

export default Notifications;
