import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ApiService } from './services/api.service';
import { LocalStorageService } from './services/local-storage.service';
import { ConfigOptionsService } from './services/config-options.service';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule, FormsModule, HttpClientModule],
  providers: [ApiService, LocalStorageService, ConfigOptionsService, CartService],
})
export class CoreModule {}
