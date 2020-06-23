import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MenuComponent } from './menu/menu.component';
import { LogoutComponent } from './logout/logout.component';
import { TrainSearchComponent } from './train-search/train-search.component';
import { TicketComponent } from './ticket/ticket.component';
import { PassengerEntryComponent, FarePipe } from './passenger-entry/passenger-entry.component';
import { TicketSummaryComponent } from './ticket-summary/ticket-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    HomepageComponent,
    MenuComponent,
    LogoutComponent,
    TicketComponent,
    TrainSearchComponent,
    PassengerEntryComponent,
    FarePipe,
    TicketSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
