import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { IBook } from 'src/app/shared/models/book';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  book!: IBook;
  bookId!: number;
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.bookId = +this.route.snapshot.url[2].path;

    this.apiService.getBook(this.bookId).subscribe((book) => {
      this.book = book;
    });
  }

  updateBook(book: IBook) {
    this.apiService.updateBook(book, this.bookId);
  }
}
