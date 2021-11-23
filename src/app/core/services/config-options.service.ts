import { Injectable } from '@angular/core';
import { IBook } from '../../shared/models/book';
import { IViewedBook } from '../../shared/models/recentlyViewedBook';
import { LocalStorageService } from './local-storage.service';
@Injectable({
  providedIn: 'root',
})
export class ConfigOptionsService {
  constructor(private localStorageSvc: LocalStorageService) {}

  returnViewedBookObjects(book: IBook): IViewedBook {
    const viewedDate = new Date();
    const id = book.id === undefined ? NaN : book.id;
    return {
      id: id,
      name: book.name,
      poster: book.poster,
      price: book.price,
      whenViewed: {
        viewedTime: viewedDate,
        viewedInfo: 'Info',
      },
    };
  }
}
