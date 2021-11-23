import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { CommonModule } from '@angular/common';
import { BookModule } from './book/book.module';
import { CartModule } from './cart/cart.module';
import { HomeModule } from './home/home.module';
import { FreeContentModule } from './free-content/free-content.module';

const routes: Routes = [
  {
    path: '',
    children: [],
  },
];

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    CoreModule,
    RouterModule,
    CommonModule,
    BookModule,
    CartModule,
    HomeModule,
    FreeContentModule
  ],
  exports: [],
})
export class FeaturesModule {}
