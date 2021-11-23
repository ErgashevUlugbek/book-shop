import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { OrdersComponent } from './orders/orders.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BookFormComponent } from './book-form/book-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    ProductsComponent,
    ProductComponent,
    AddComponent,
    EditComponent,
    OrdersComponent,
    BookFormComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, SharedModule, ReactiveFormsModule],
})
export class AdminModule {}
