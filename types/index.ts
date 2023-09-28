export type User = {
    id: string;
    name: string;
    username: string;
    image?: string;
  };
  
export  type TweetType = {
    content: string;
    user: User;
    id:string;
    createdAt: string;
    numberOfComments?: number,
    numberOfRetweets?: number,
    numberOfLikes?: number,
    impressions?: number,
    image?: string
  };