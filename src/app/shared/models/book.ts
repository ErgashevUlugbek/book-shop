export interface IBook {
  id?: number;
  name: string;
  author: string;
  description: string;
  price: number;
  pages: number;
  publishedDate: Date;
  category: string[];
  poster: string;
  sold: number;
  reviews?: IReview[];
}

export interface IReview {
  author: string;
  reviewDate: Date;
  review: string;
}
