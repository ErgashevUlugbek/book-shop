import { Input, ElementRef, Output, EventEmitter, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { ICartItem } from '../../../shared/models/cartItem';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() cartItemBook!: ICartItem;
  @Output() passTotalPrice = new EventEmitter<number>();
  @ViewChild('bookQuantityInput') bookQuantityInput!: ElementRef;

  constructor(private cartSvc: CartService) {}

  totalPrice!: number;
  oldQuantity!: number;
  newQuantity!: number;
  isItemRemoved = true;
  ngOnInit(): void {
    this.totalPrice = this.cartSvc.calculateTotalPrice();
  }

  changeQuantity() {
    this.oldQuantity = this.cartItemBook.count;
    this.cartItemBook.count = this.bookQuantityInput.nativeElement.value;
    this.newQuantity = this.cartItemBook.count;

    this.sendQuantityToStorage();
    this.passSum();
  }

  sendQuantityToStorage() {
    if (this.newQuantity > this.oldQuantity) {
      this.cartSvc.getChoosenBook(this.cartItemBook.book);
    } else if (this.newQuantity < this.oldQuantity) {
      this.cartSvc.decreaseChoosenBook(this.cartItemBook.book);
    }
    this.totalPrice = this.cartSvc.calculateTotalPrice();
  }

  removeItemFromStorage() {
    this.cartSvc.removeBookFromStorage(this.cartItemBook.book);
    this.isItemRemoved = false;
    this.totalPrice = this.cartSvc.calculateTotalPrice();
    this.passSum();
  }

  passSum() {
    this.passTotalPrice.emit(this.totalPrice);
  }
}
