import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from 'src/app/shared/models/book';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-middle-bar-parent',
  templateUrl: './middle-bar-parent.component.html',
  styleUrls: ['./middle-bar-parent.component.scss'],
})
export class MiddleBarParentComponent implements OnInit {
  books!: IBook[];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getRecentBooks();
  }

  getRecentBooks() {
    this.apiService.getBooks().subscribe((books: IBook[]) => {
      books = books.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()).slice(0, 3);
      this.books = books;
    });
  }
}
