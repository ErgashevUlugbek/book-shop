import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { IQuote } from '../../models/quote';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  quotes$!: Observable<IQuote[]>;
  randomNumber = 0;
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.quotes$ = this.apiService.getRandomQuotes();
    // Buddha
    this.apiService
      .getRandomQuotes()
      .pipe(first())
      .subscribe((quotes: IQuote[]) => {
        this.randomNumber = Math.floor(Math.random() * quotes.length);
      });
  }
}
