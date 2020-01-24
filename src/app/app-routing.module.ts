import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';


const routes: Routes = [
  {path : 'home', component: HomeComponent},
  {path : 'movies', component: MovieListComponent},
  {path : '', pathMatch:'full', redirectTo: 'home'},
  {path : 'movie-details/:imdbId', component: MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
