import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainscreenComponent } from './mainscreen/mainscreen.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { AhashortsComponent } from './ahashorts/ahashorts.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainscreenComponent,
    MoviesComponent,
    MoviedetailComponent,
    AhashortsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
