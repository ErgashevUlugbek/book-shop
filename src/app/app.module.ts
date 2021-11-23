import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Main modules
import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, CoreModule, FeaturesModule, SharedModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
