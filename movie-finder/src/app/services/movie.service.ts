import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import Movie from '../models/Movie';

const BASE_URL = 'https://api.themoviedb.org/3';
const POPULAR_MOVIE = '/movie/popular';
const IN_THEATHER_MOVIE = '/discover/movie';
const API_KEY = '?api_key=46837402c89cf72c5c369a3dd1103d66';

@Injectable({ providedIn: 'root' })
export class MovieService {

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(BASE_URL + POPULAR_MOVIE + API_KEY);
  }

  getInTheaterMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(BASE_URL + IN_THEATHER_MOVIE + API_KEY + '&with_release_type=2|3');
  }
  
}
