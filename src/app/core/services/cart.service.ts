import { Injectable } from '@angular/core';
import { IBook } from '../../shared/models/book';
import { LocalStorageService } from './local-storage.service';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  choosenBooks = this.localStorage.getCartItem();
  totalPrice!: number;

  getChoosenBook(book: IBook) {
    this.increaseChoosenBook(book);
  }

  increaseChoosenBook(book: IBook) {
    this.choosenBooks.push(book);
    this.localStorage.setCartItem(this.choosenBooks);
  }

  decreaseChoosenBook(book: IBook) {
    const ind = this.choosenBooks.findIndex((choosenBook) => choosenBook.id === book.id);
    this.choosenBooks.splice(ind, 1);
    this.localStorage.setCartItem(this.choosenBooks);
  }

  removeBookFromStorage(book: IBook) {
    this.choosenBooks = this.choosenBooks.filter((choosenBook) => choosenBook.id !== book.id);
    this.localStorage.setCartItem(this.choosenBooks);
  }

  calculateTotalPrice() {
    this.totalPrice = this.choosenBooks
      ? this.choosenBooks.reduce((sum, book) => sum + book.price, 0)
      : 0;
    return this.totalPrice;
  }

  removeAllBooks() {
    this.choosenBooks = [];
    this.localStorage.setCartItem(this.choosenBooks);
  }
  constructor(private localStorage: LocalStorageService) {}
}
