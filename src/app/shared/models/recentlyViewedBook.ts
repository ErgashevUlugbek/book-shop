export interface IViewedBook {
  id: number;
  name: string;
  poster: string;
  price: number;
  whenViewed: {
    viewedTime: Date;
    viewedInfo: string;
  };
}
