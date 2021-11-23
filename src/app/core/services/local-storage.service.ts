import { Injectable } from '@angular/core';
import { IBook } from '../../shared/models/book';
import { IViewedBook } from '../../shared/models/recentlyViewedBook';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  storage = window.localStorage;

  cartBooks!: IBook[];
  cartBooksObj = { cartBooks: this.cartBooks };

  viewedBooks!: IViewedBook[];
  viewedBooksObj = { viewedBooks: this.viewedBooks };

  constructor() {}

  getCartItem() {
    this.cartBooks =
      (JSON.parse(this.storage.getItem('cartBooks') || '[]').cartBooks as IBook[]) || [];
    return this.cartBooks;
  }

  setCartItem(books: IBook[]) {
    this.cartBooksObj.cartBooks = books;
    this.storage.setItem('cartBooks', JSON.stringify(this.cartBooksObj));
  }

  removeCartItem() {
    this.storage.clear();
  }

  getViewedItem() {
    this.viewedBooks =
      (JSON.parse(this.storage.getItem('viewedBooks') || '[]').viewedBooks as IViewedBook[]) || [];
    return this.viewedBooks;
  }

  setViewedItem(books: IViewedBook[]) {
    this.viewedBooksObj.viewedBooks = books;
    this.storage.setItem('viewedBooks', JSON.stringify(this.viewedBooksObj));
  }

  removeViewedItem() {
    this.storage.clear();
  }
}
