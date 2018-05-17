import {Planets} from '../shared/planets.model';

declare var $: any;

import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movies } from '../shared/movies.model';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  providers: [MoviesService]
})
export class PrincipalComponent implements OnInit {

public movies: Movies[];
public movie: Movies;

public planets: Planets[];
public planet: Planets;


constructor(private moviesService: MoviesService) { }


  ngOnInit() {
    this.moviesService.getFilmes().subscribe(data => {
       this.movies = data.results;
       this.movies.forEach(movie => console.log(movie));
    });
  }
   // exibe os detalhes do respectivo filme (modal)
   detalhes(movie: Movies) {
      this.movie = movie;
      $("#detalhes").modal('show');
   }


}
