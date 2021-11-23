import { NgModule } from '@angular/core';

// Modules
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../core/modules/material.module';
import { FormsModule } from '@angular/forms';

// Components
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RecentlyViewedComponent } from './components/recently-viewed/recently-viewed.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BooksComponent } from './components/book-list/books/books.component';

// Directives
import { OpenCloseRecentlyViewedDirective } from './directives/open-close-recently-viewed.directive';
import { ChangeOnHoverDirective } from './directives/change-on-hover.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { ViewedBookComponent } from './components/recently-viewed/viewed-book/viewed-book.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    RecentlyViewedComponent,
    BookListComponent,
    BooksComponent,
    OpenCloseRecentlyViewedDirective,
    ChangeOnHoverDirective,
    OrderByPipe,
    ViewedBookComponent,
  ],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [
    // Modules
    RouterModule,
    FormsModule,
    MaterialModule,
    CommonModule,

    // Components
    HeaderComponent,
    NavbarComponent,
    RecentlyViewedComponent,
    BookListComponent,
    BooksComponent,

    // Directives
    OpenCloseRecentlyViewedDirective,
    ChangeOnHoverDirective,
    // Pipes
    OrderByPipe,
  ],
})
export class SharedModule {}
