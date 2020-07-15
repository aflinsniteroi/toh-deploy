import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroAddComponent } from './hero-add/hero-add.component';
import { HeroFilterPipe } from './hero-filter.pipe';
import { SearchInputComponent } from './search-input/search-input.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    NavbarComponent,
    DashboardComponent,
    HeroAddComponent,
    HeroFilterPipe,
    SearchInputComponent,
    HeroSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbCollapseModule,
    HttpClientModule,
   ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

