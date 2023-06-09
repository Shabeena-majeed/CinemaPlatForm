import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainscreenComponent } from './mainscreen/mainscreen.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { AhashortsComponent } from './ahashorts/ahashorts.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
{path:'home', component:HomeComponent},
{path:'mainscreen',component:MainscreenComponent},
{path:'movies' , component:MoviesComponent},
{path:'moviedetail',component:MoviedetailComponent},
{path:'ahashorts',component:AhashortsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
