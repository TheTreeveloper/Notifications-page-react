import React, { useState } from "react";
import { Notification } from "./types";
import { notifications as mockNotifications } from "./MockData";
import "./NotificationsPage.css";

const Notifications: React.FC = () => {
  const [notifications, setNotifications] =
    useState<Notification[]>(mockNotifications);

  const [messageCount, setMessageCount] = useState(
    mockNotifications.filter((notification) => !notification.isRead).length
  );

  const handleMarkAsRead = (id: number) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification
      )
    );

    setMessageCount(
      notifications.filter((notification) => !notification.isRead).length
    );
  };

  return (
    <div className="notifications-container">
      <div className="notifications-control">
        <section>
          <h1>Notifications</h1>
          <div className="notif-counter">{messageCount}</div>
        </section>
        <p
          onClick={() => {
            setNotifications(
              notifications.map((n) => ({ ...n, isRead: true }))
            );
            setMessageCount(0);
          }}
        >
          Mark all as read
        </p>
      </div>
      {/* Notifications Body */}
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`notification ${notification.isRead ? "read" : "unread"}`}
          onClick={() => handleMarkAsRead(notification.id)}
        >
          <img src={notification.user.image} alt={notification.user.name} />

          <div className="notification-content">
            <p>
              <strong>{notification.user.name}</strong> {notification.action}{" "}
              {notification.post && (
                <span className="post">{notification.post}</span>
              )}
              {notification.group && (
                <span className="group">{notification.group}</span>
              )}
            </p>

            <p className="timestamp">{notification.timestamp}</p>
            {notification.privateMessage && (
              <p className="private-message">{notification.privateMessage}</p>
            )}
          </div>

          {notification.selfImage && (
            <img
              src={notification.selfImage}
              alt="Related content"
              className="self-image"
            />
          )}
          {/* Notification Icon */}
          <div
            className={`notif-icon ${notification.isRead ? "read" : "unread"}`}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
