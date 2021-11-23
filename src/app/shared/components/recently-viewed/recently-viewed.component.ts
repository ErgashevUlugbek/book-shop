import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-recently-viewed',
  templateUrl: './recently-viewed.component.html',
  styleUrls: ['./recently-viewed.component.scss'],
})
export class RecentlyViewedComponent implements OnInit {
  viewedBooks = this.localStorageSvc.getViewedItem();
  constructor(private localStorageSvc: LocalStorageService) {}

  ngOnInit(): void {}

  calculateViewedTime() {
    let now = new Date();
    let yearDiff;
    let monthDiff;
    let dayDiff;
    let hourDiff;
    let minuteDiff;
    for (let i = 0; i < this.viewedBooks.length; i++) {
      const book = this.viewedBooks[i];
      const viewedTime = new Date(book.whenViewed.viewedTime);

      yearDiff = now.getFullYear() - viewedTime.getFullYear();
      monthDiff = now.getMonth() - viewedTime.getMonth();
      dayDiff = now.getDate() - viewedTime.getDate();
      hourDiff = now.getHours() - viewedTime.getHours();
      minuteDiff = now.getMinutes() - viewedTime.getMinutes();

      if (yearDiff > 0) {
        book.whenViewed.viewedInfo = `${yearDiff !== 1 ? yearDiff + ' years' : 'A year'} ago`;
      } else {
        if (monthDiff > 0) {
          book.whenViewed.viewedInfo = `${monthDiff !== 1 ? monthDiff + ' months' : 'A month'} ago`;
        } else {
          if (dayDiff > 0) {
            book.whenViewed.viewedInfo = `${dayDiff !== 1 ? dayDiff + ' days' : 'A day'} ago`;
          } else {
            if (hourDiff > 0) {
              book.whenViewed.viewedInfo = `${hourDiff !== 1 ? hourDiff + ' hours' : 'A hour'} ago`;
            } else {
              if (minuteDiff > 0) {
                book.whenViewed.viewedInfo = `${
                  minuteDiff !== 1 ? minuteDiff + ' minutes' : 'A minute'
                } ago`;
              } else {
                book.whenViewed.viewedInfo = `Less than a minute ago`;
              }
            }
          }
        }
      }
    }
  }

  clear() {
    this.localStorageSvc.removeViewedItem();
  }
}
