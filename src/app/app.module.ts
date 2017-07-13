import { UsersServiceService } from './shared/users-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
// import { MdButtonModule, MdCheckboxModule, MdCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MaterialModule
    // MdButtonModule, MdCheckboxModule, MdCardModule
  ],
  providers: [
    UsersServiceService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
