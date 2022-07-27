import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-popularpost',
  templateUrl: './popularpost.component.html',
  styleUrls: ['./popularpost.component.css']
})
export class PopularpostComponent implements OnInit {

  customOptions: OwlOptions = {
    
    loop: true,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      }
    }
  }

  id: any[0];
  title: any[0];
  heading: any;
  author: any;
  image: any[0];
  date: any;
  data : any[0];
  image1: any[0];
  

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get('http://localhost:1337/api/posts?populate=*').subscribe((res : any) =>{
      console.log(res)
      this.data = res.data
      // console.log(this.data)
    })  

   }

}
