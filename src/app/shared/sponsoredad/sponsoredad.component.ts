import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-sponsoredad',
  templateUrl: './sponsoredad.component.html',
  styleUrls: ['./sponsoredad.component.css']
})
export class SponsoredadComponent implements OnInit {

  id:any;
  data:any;
  title:any;
  image: any;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {

   this.http.get('http://localhost:1337/api/posts?populate=*').subscribe((res : any) =>{
      console.log(res)
      this.data = res.data
    })  
    
  }
}
