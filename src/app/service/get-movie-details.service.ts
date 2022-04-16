import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class getMovieInfo{
  constructor(public Title : string, public Released : string, public Runtime : string, 
    public Genre : string, public Actors : string, public Plot : string, public Language : string,
    public Poster : string, public imdbRating : string, public Awards : string, public imdbVotes : string){}
}

@Injectable({
  providedIn: 'root'
})
export class GetMovieDetailsService {

  constructor(private http : HttpClient) { }

  getMovieRequest(name : any){
    return this.http.get<getMovieInfo>(`https://www.omdbapi.com/?t=${name}&apikey=34e8218d`);
  }

}
