import { Component, OnInit } from '@angular/core';
import { GetMovieDetailsService } from '../service/get-movie-details.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  image_link : string = '';
  name : string = '';
  title : string = '';
  released : string = '';
  runtime : string = '';
  genre : string = '';
  actors : string = '';
  plot : string = '';
  language : string = '';
  imdbVotes : string = '';
  imdbRating : string = '';

  constructor(private service : GetMovieDetailsService) { }

  ngOnInit(): void {
  }
  
  searchAction(){
    this.service.getMovieRequest(this.name).subscribe(
      Response => {
        return this.getSuccessfullResponse(Response);
      },
      error => {
        return this.errorResponse(error);
      })
  }

  getSuccessfullResponse(Response : any){
    this.image_link = Response.Poster;
    this.title = Response.Title;
    this.released = Response.Released;
    this.runtime = Response.Runtime;
    this.genre = Response.Genre;
    this.actors = Response.Actors;
    this.plot = Response.Plot;
    this.language = Response.Language;
    this.imdbVotes = Response.imdbVotes;
    this.imdbRating = Response.imdbRating;
  }

  errorResponse(error : any){
    alert(error.message);
  }

}
