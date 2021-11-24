import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from '../models/book';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  getMS(date: Date): number {
    date = new Date(date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const fullDate = `${year}-${month}-${day}`;
    return Date.parse(fullDate);
  }

  transform(value: IBook[], sortBy: string, ascending: boolean): IBook[] {
    if (value) {
      if (sortBy === 'byPrice') {
        if (ascending) {
          value = value.sort((a, b) => a.price - b.price);
        } else {
          value = value.sort((a, b) => b.price - a.price);
        }
      }

      if (sortBy === 'byName') {
        if (ascending) {
          value = value.sort((a, b) => a.name.localeCompare(b.name));
        } else {
          value = value.sort((a, b) => b.name.localeCompare(a.name));
        }
      }

      if (sortBy === 'byDate') {
        if (ascending) {
          value = value.sort((a, b) => this.getMS(a.publishedDate) - this.getMS(b.publishedDate));
        } else {
          value = value.sort((a, b) => this.getMS(b.publishedDate) - this.getMS(a.publishedDate));
        }
      }

      if (sortBy === 'bySubject') {
        if (ascending) {
          value = value.sort((a, b) => a.category[0].localeCompare(b.category[0]));
        } else {
          value = value.sort((a, b) => b.category[0].localeCompare(a.category[0]));
        }
      }

      if (sortBy === 'bySold') {
        if (ascending) {
          value = value.sort((a, b) => a.sold - b.sold);
        } else {
          value = value.sort((a, b) => b.sold - a.sold);
        }
      }
    }

    return value;
  }
}
