import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import Movie from '../models/Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input()
  movie: Movie;
  @Output()
  clickButtonEmiter = new EventEmitter();
  imagePath: string;

  constructor() { }

  ngOnInit() {
    this.imagePath = 'https://image.tmdb.org/t/p/original' + this.movie.poster_path;
  }

  clickButton(){
    console.log(this.movie.id);
    this.clickButtonEmiter.emit(this.movie.id + '');
  }
}
