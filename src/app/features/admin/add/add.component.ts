import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { IBook } from 'src/app/shared/models/book';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  addBook(book: IBook) {
    console.log(book);
    this.apiService.addBook(book).subscribe((books) => console.log(books));
  }
}
