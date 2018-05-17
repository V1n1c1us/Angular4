import { Movies } from './shared/movies.model';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MoviesService {
    //
    private url = 'https://swapi.co/api/films';
    private urlPlanets = 'https://swapi.co/api/planets';
    private headers: HttpHeaders;

    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Access-Control-Allow-Origin', '*');
        this.headers.append('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, OPTIONS, HEAD');
    }

    getFilmes(): Observable<any> {
        return this.http.get(this.url, {headers: this.headers});
    }

    getPlanets(): Observable<any> {
        return this.http.get(this.urlPlanets, {headers: this.headers});
    }

}
