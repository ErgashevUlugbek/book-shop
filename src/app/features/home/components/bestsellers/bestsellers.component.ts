import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { IBook } from 'src/app/shared/models/book';

@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrls: ['./bestsellers.component.scss'],
})
export class BestsellersComponent implements OnInit {
  books!: IBook[];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getMostSoldBooks();
  }

  getMostSoldBooks() {
    this.apiService.getBooks().subscribe((books: IBook[]) => {
      books = books.sort((a, b) => b.sold - a.sold).slice(0, 3);
      this.books = books;
    });
  }
}
