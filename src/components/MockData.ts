import { Notification } from './type';

export const notifications: Notification[] = [
  {
    id: 1,
    user: { id: 1, name: 'Mark Webber', image: '/images/avatar-mark-webber.webp' },
    action: 'reacted to your post',
    post: 'My first tournament today!',
    timestamp: '1m ago',
    isRead: false
  },
  {
    id: 2,
    user: { id: 2, name: 'Angela Gray', image: '/images/avatar-angela-gray.webp' },
    action: 'followed you',
    timestamp: '5m ago',
    isRead: false
  }, 
  {
    id: 3,
    user: { id: 3, name: 'Jacob Thompson', image:'/images/avatar-jacob-thompson.webp' },
    action: 'has joined your group',
    group: 'Chess Club',
    timestamp: '1 day ago',
    isRead: false
  },
  {
    id: 4,
    user: { id: 4, name: 'Rizky Hasanuddin', image: '/images/avatar-rizky-hasanuddin.webp' },
    action: 'sent you a private message',
    timestamp: '5 days ago',
    privateMessage: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    isRead: true
  },
  {
    id: 5,
    user: { id: 5, name: 'Kimberly Smith', image: '/images/avatar-kimberly-smith.webp' },
    action: 'commented on your picture',
    selfImage: '/images/image-chess.webp',
    timestamp: '1 week ago',
    isRead: true
  },
  {
    id: 6,
    user: { id: 6, name: 'Nathan Peterson', image: '/images/avatar-nathan-peterson.webp' },
    action: 'reacted to your recent post',
    post: '5 end-game strategies to increase your win rate',
    timestamp: '2 weeks ago',
    isRead: true
  },
  {
    id: 7,
    user: { id: 7, name: 'Anna Kim', image: '/images/avatar-anna-kim.webp' },
    action: 'left the group',
    group: 'Chess Club',
    timestamp: '2 weeks ago',
    isRead: true
  }
];
