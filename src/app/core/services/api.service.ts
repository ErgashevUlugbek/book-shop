import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from 'src/app/shared/models/book';
import { IQuote } from 'src/app/shared/models/quote';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url = 'http://localhost:3000/books';
  constructor(private http: HttpClient) {}

  getRandomQuotes() {
    return this.http.get('https://type.fit/api/quotes') as Observable<IQuote[]>;
  }

  getBooks(): Observable<Array<IBook>> {
    return this.http.get<Array<IBook>>(this.url);
  }

  getBook(id: number): Observable<IBook> {
    return this.http.get<IBook>(this.url + '/' + id);
  }

  addBook(book: IBook) {
    return this.http.post<IBook>(this.url, book);
  }

  updateBook(book: IBook, id: number) {
    return this.http.put<IBook>(this.url + '/' + id, book);
  }

  deleteBook(book: IBook) {
    return this.http.delete<IBook>(this.url + '/' + book.id);
  }
}
