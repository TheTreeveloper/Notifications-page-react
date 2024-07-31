import UserMarkAvatar from "/images/avatar-mark-webber.webp";
import UserAngelaAvatar from "/images/avatar-angela-gray.webp";
import UserJacobAvatar from "/images/avatar-jacob-thompson.webp";
import UserRizkyAvatar from "/images/avatar-rizky-hasanuddin.webp";
import UserKimberlyAvatar from "/images/avatar-kimberly-smith.webp";
import Cheese from "/images/image-cheese.webp";

const actionData = [
  {
    avatar: UserMarkAvatar,
    userName: "Mark Webber",
    action: "reacted to your recent post",
    message: "My first tournament today!",
    timestamp: "1m ago",
    isUnread: true,
  },

  {
    avatar: UserAngelaAvatar,
    userName: "Angela Gray",
    action: "followed you",
    message: "",
    timestamp: "5m ago",
    isUnread: true,
  },

  {
    avatar: UserJacobAvatar,
    userName: "Jacob Thompson",
    action: "has joined your group",
    message: "",
    timestamp: "1 day ago",
    isUnread: true,
    group: "Chess Club",
  },

  {
    avatar: UserRizkyAvatar,
    userName: "Rizky Hasanuddin",
    action: "sent you a private message",
    message: "",
    timestamp: "5 days ago",
    isUnread: false,
    group: "",
    directMessage: true,
  },

  {
    avatar: UserKimberlyAvatar,
    userName: "Kimberly Smith",
    action: "commented on your picture",
    message: "",
    timestamp: "1 week ago",
    isUnread: false,
    photo: Cheese,
  },
];

export default actionData;
