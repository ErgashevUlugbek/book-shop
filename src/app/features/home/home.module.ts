import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { RightBarComponent } from './right-bar/right-bar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BestsellersComponent } from './components/bestsellers/bestsellers.component';
import { HomeComponent } from './home.component';
import { FreeContentBoxComponent } from './components/free-content-box/free-content-box.component';
import { RecentReleasesComponent } from './components/recent-releases/recent-releases.component';
import { LiveProjectBoxComponent } from './components/live-project-box/live-project-box.component';

@NgModule({
  declarations: [
    RightBarComponent,
    BestsellersComponent,
    HomeComponent,
    FreeContentBoxComponent,
    RecentReleasesComponent,
    LiveProjectBoxComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
