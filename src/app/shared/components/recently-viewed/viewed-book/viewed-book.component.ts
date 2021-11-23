import { Component, Input, OnInit } from '@angular/core';
import { IViewedBook } from 'src/app/shared/models/recentlyViewedBook';

@Component({
  selector: 'app-viewed-book',
  templateUrl: './viewed-book.component.html',
  styleUrls: ['./viewed-book.component.scss'],
})
export class ViewedBookComponent implements OnInit {
  @Input() books!: IViewedBook[];
  constructor() {}

  ngOnInit(): void {}
}
