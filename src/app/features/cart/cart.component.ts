import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/core/services/utils.service';
import { CartService } from '../../core/services/cart.service';
import { ICartItem } from '../../shared/models/cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  totalPrice = this.cartSvc.calculateTotalPrice();
  choosenBooks;
  cartItems: ICartItem[] = [];

  constructor(private cartSvc: CartService, private utilsService: UtilsService) {
    this.choosenBooks = this.cartSvc.choosenBooks;
  }

  joinSameItems() {
    const myBooks = this.choosenBooks;
    for (let i = 0; i < myBooks.length; i++) {
      const book = myBooks[i];
      if (this.cartItems.length === 0) {
        this.cartItems.push({ book: book, count: 1 });
      } else {
        let ind = this.cartItems.findIndex((bookObj) => bookObj.book.id === book.id);
        if (ind !== -1) {
          this.cartItems[ind].count++;
        } else {
          this.cartItems.push({ book: book, count: 1 });
        }
      }
    }
  }

  changeTotalPrice(newTotalPrice: number) {
    this.totalPrice = newTotalPrice;
  }

  removeAllItems() {
    this.cartSvc.removeAllBooks();
    this.utilsService.reloadCurrentRoute();
  }

  ngOnInit(): void {
    this.totalPrice = this.cartSvc.totalPrice;
    if (this.choosenBooks) {
      this.joinSameItems();
    }
  }
}
