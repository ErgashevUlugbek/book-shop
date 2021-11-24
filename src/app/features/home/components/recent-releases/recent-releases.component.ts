import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { IBook } from 'src/app/shared/models/book';

@Component({
  selector: 'app-recent-releases',
  templateUrl: './recent-releases.component.html',
  styleUrls: ['./recent-releases.component.scss'],
})
export class RecentReleasesComponent implements OnInit {
  books!: IBook[];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getRecentBooks();
  }

  getRecentBooks() {
    this.apiService.getBooks().subscribe((books: IBook[]) => {
      books = books
        .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
        .slice(0, 3);
      this.books = books;
    });
  }
}
