import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
})
export class BannersComponent {
data:any;
constructor( private httpClient: HttpClient){

}

ngOnInit(): void {
//  this.http.get("assets/json/banners.json").subscribe((data: any) =>{
//       this.data = data.data;
//       console.log(this.data);
//     })
debugger;
this.httpClient.get<any>("assets/json/banners.json").subscribe((data)=>
this.data = data

)
console.log(this.data);
  }
}
