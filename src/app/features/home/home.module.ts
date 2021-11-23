import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LeftBarParentComponent } from './left-bar-parent/left-bar-parent.component';
import { RightBarComponent } from './right-bar/right-bar.component';
import { MiddleBarParentComponent } from './middle-bar/middle-bar-parent/middle-bar-parent.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BestsellersComponent } from './middle-bar/bestsellers/bestsellers.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    LeftBarParentComponent,
    RightBarComponent,
    MiddleBarParentComponent,
    BestsellersComponent,
    HomeComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
