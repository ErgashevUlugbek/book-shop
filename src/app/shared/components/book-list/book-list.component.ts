import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { ConfigOptionsService } from 'src/app/core/services/config-options.service';
import { IBook } from 'src/app/shared/models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  catalogBooks!: IBook[];
  orderPattern = 'bySubject';
  imageVisible = true;
  constructor(private configOptionsSvc: ConfigOptionsService, private apiService: ApiService) {}

  ngOnInit(): void {
    this.getBooks();
    
  }
  
  sortBy(pattern: string) {
    this.orderPattern = pattern;
    // console.log(this.catalogBooks);
  }
  
  toggleImage() {
    this.imageVisible = !this.imageVisible;
  }
  
  changeBooksOrder(pattern: string) {
    this.orderPattern = pattern;
  }
  
  private getBooks() {
    this.apiService.getBooks().subscribe((books) => {
      this.catalogBooks = books;
    });
  }
}
