import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { UtilsService } from 'src/app/core/services/utils.service';
import { IBook } from 'src/app/shared/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  @Input() books!: IBook[];
  @Input() pattern!: string;
  @Input() imageVisible!: boolean;
  adminPage = false;
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private utilsService: UtilsService,
  ) {}

  ngOnInit(): void {
    this.isAdminPage();
  }

  getDate(date: string) {
    return new Date(date);
  }

  isAdminPage() {
    if (this.route.snapshot.url[0].path === 'products') {
      this.adminPage = true;
    }
  }

  deleteBook(book: IBook) {
    const choice = confirm('Are you sure to delete this book?');
    if (choice) {
      this.apiService.deleteBook(book).subscribe((response) => console.log(response));
      this.utilsService.reloadCurrentRoute();
    }
  }
}
