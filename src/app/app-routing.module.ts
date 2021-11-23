import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './shared/components/book-list/book-list.component';
import { BookComponent } from './features/book/book.component';
import { CartComponent } from './features/cart/cart.component';
import { HomeParentComponent } from './features/home/home-parent/home-parent.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin.module').then((m) => m.AdminModule),
  },
  { path: 'catalog/:bookId', component: BookComponent },
  { path: 'catalog', component: BookListComponent },
  { path: 'cart', component: CartComponent },
  { path: '', component: HomeParentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
