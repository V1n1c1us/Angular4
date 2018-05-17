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

   movies: any = [];
   ator: any = null;

   movie: any = [];
   constructor(private moviesService: MoviesService) { }

   ngOnInit() {
      this.moviesService.getFilmes().subscribe(data => {
          this.movies = data.results;
          //FILME
          for(let m of this.movies) {
              for (let a of m.characters) {
                  this.moviesService.getAtores(a).subscribe(data => {
                     this.ator = data;
                     console.log('FILME: ' + m.title + ' ->   ATOR: '+ this.ator.name);
                  });
              }
          }

      });
   }
   // exibe os detalhes do respectivo filme (modal)
   detalhes(movie: Movies) {
      this.movie = movie;
      $("#detalhes").modal('show');
   }
}
