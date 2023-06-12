import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent {
  data:any;
  constructor( private httpClient: HttpClient){
  
  }
  
  ngOnInit(): void {

  this.httpClient.get<any>("assets/json/movies.json").subscribe((data)=>
  this.data = data
  
  )
  console.log(this.data);
    }
  }
  