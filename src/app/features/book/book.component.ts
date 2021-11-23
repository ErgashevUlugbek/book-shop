import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBook } from '../../shared/models/book';
import { CartService } from 'src/app/core/services/cart.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ConfigOptionsService } from 'src/app/core/services/config-options.service';
import { IViewedBook } from 'src/app/shared/models/recentlyViewedBook';
import { ApiService } from 'src/app/core/services/api.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  targetBook!: IBook;
  viewedBooks!: IViewedBook[];
  checkCostStyles = {};

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private cartSvc: CartService,
    private localStorageSvc: LocalStorageService,
    private configOptionsSvc: ConfigOptionsService,
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const bookIdFromRoute = Number(routeParams.get('bookId'));
    this.apiService.getBooks().subscribe((books) => {
      const obj = books.find((book) => {
        return book.id === bookIdFromRoute;
      });
      if (obj) {
        this.targetBook = obj;
        this.checkCostStyles = {
          'font-weight': this.targetBook.price > 40 ? 'bold' : 'normal',
          color: this.targetBook.price > 40 ? 'red' : 'green',
        };
        this.sendToViewedBooks(this.targetBook);
      }
    });
  }

  onBuy() {
    this.cartSvc.getChoosenBook(this.targetBook);
  }

  sendToViewedBooks(book: IBook) {
    this.viewedBooks = this.localStorageSvc.getViewedItem();
    if (this.viewedBooks) {
      this.viewedBooks = this.viewedBooks.filter((oldBook) => oldBook.id !== book.id);
    }

    this.viewedBooks.unshift(this.configOptionsSvc.returnViewedBookObjects(this.targetBook));
    this.localStorageSvc.setViewedItem(this.viewedBooks);
  }

  getPublishedDate(publishedDate: Date) {
    publishedDate = new Date(publishedDate);
    const now = new Date();
    const year = now.getFullYear() - publishedDate.getFullYear();
    const month = now.getMonth() - publishedDate.getMonth();
    if (year >= 1) {
      return year === 1 ? ' a year ago.' : year + ' years ago.';
    } else {
      return month <= 1 ? ' a month ago.' : month + ' months ago.';
    }
  }
}
