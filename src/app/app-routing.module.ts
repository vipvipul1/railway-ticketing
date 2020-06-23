import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RouteGuardService } from './app-service/route-guard/route-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { LoginRouteGuardService } from './app-service/route-guard/login-route-guard.service';
import { TrainSearchComponent } from './train-search/train-search.component';
import { PassengerEntryComponent } from './passenger-entry/passenger-entry.component';
import { TicketSummaryComponent } from './ticket-summary/ticket-summary.component';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [LoginRouteGuardService] },
  { path: 'login', component: LoginComponent, canActivate: [LoginRouteGuardService] },
  { path: 'homepage/:name', component: HomepageComponent, canActivate: [RouteGuardService] },
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService] },
  { path: 'book', component: TrainSearchComponent, canActivate: [RouteGuardService] },
  { path: 'passengerform', component: PassengerEntryComponent, canActivate: [RouteGuardService] },
  { path: 'ticketsummary', component: TicketSummaryComponent, canActivate: [RouteGuardService] },

  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
