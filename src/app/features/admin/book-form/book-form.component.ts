import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { UtilsService } from 'src/app/core/services/utils.service';
import { IBook } from 'src/app/shared/models/book';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
})
export class BookFormComponent implements OnInit, OnChanges {
  @Input() defaultBook!: IBook;
  @Output() passBookInfo = new EventEmitter<IBook>();
  book!: IBook;
  bookForm = this.fb.group({
    bookName: ['', [Validators.required, Validators.maxLength(100), Validators.minLength(3)]],
    bookAuthor: ['', [Validators.required, Validators.maxLength(100), Validators.minLength(3)]],
    bookDescription: [
      '',
      [Validators.required, Validators.maxLength(1000), Validators.minLength(10)],
    ],
    bookPrice: ['', [Validators.required, Validators.max(200), Validators.min(0)]],
    bookPages: ['', [Validators.required, Validators.max(10000), Validators.min(10)]],
    bookPublishedDate: ['', Validators.required],
    bookCategories: ['', Validators.required],
    bookPoster: ['', [Validators.required, Validators.maxLength(100), Validators.minLength(3)]],
  });
  constructor(private utilsService: UtilsService, private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log('working');
  }

  get bookName() {
    return this.bookForm.get('bookName');
  }

  get bookAuthor() {
    return this.bookForm.get('bookAuthor');
  }

  get bookDescription() {
    return this.bookForm.get('bookDescription');
  }

  get bookPrice() {
    return this.bookForm.get('bookPrice');
  }

  get bookPages() {
    return this.bookForm.get('bookPages');
  }

  get bookPublishedDate() {
    return this.bookForm.get('bookPublishedDate');
  }

  get bookCategories() {
    return this.bookForm.get('bookCategories');
  }

  get bookPoster() {
    return this.bookForm.get('bookPoster');
  }

  ngOnChanges(changes: SimpleChanges) {
    this.defaultBook = changes.defaultBook.currentValue;
    if (this.defaultBook) {
      this.assignDefaultValues();
    }
  }

  onSubmit() {
    const bookForm = this.bookForm.value;
    this.book = {
      name: bookForm.bookName,
      author: bookForm.bookAuthor,
      description: bookForm.bookDescription,
      price: +bookForm.bookPrice,
      pages: +bookForm.bookPages,
      publishedDate: bookForm.bookPublishedDate,
      category: bookForm.bookCategories.split(' '),
      poster: bookForm.bookPoster,
      sold: 0,
    };
    this.passBookInfo.emit(this.book);
  }

  assignDefaultValues() {
    this.bookForm.setValue({
      bookName: this.defaultBook.name,
      bookAuthor: this.defaultBook.author,
      bookDescription: this.defaultBook.description,
      bookPrice: +this.defaultBook.price,
      bookPages: +this.defaultBook.pages,
      bookPublishedDate: this.defaultBook.publishedDate,
      bookCategories: this.defaultBook.category.join(' '),
      bookPoster: this.defaultBook.poster,
    });
  }
}
