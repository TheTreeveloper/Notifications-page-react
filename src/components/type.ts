// types.ts
export type Notification = {
  id: number;
  user: {
    id: number;
    name: string;
    image: string;
  };
  action: string;
  post?: string;
  group?: string;
  timestamp: string;
  isRead: boolean;
  privateMessage?: string; 
  selfImage?: string;      
};
