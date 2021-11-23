import { IBook } from '../../shared/models/book';

export interface ICartItem {
  book: IBook;
  count: number;
}
