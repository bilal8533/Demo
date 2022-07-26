import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

customOptions: OwlOptions = {
    
    loop: true,
    // mouseDrag: false,
    // touchDrag: false,
    // pullDrag: false,
    dots: true,
    navSpeed: 700,
    // navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      
    },
    // nav: true
  }

  id: any[0];
  title: any[0];
  description: any;
  heading: any;
  author: any;
  image: any[0];
  date: any;
  data : any[0];
  image1: any[0];
  totalLength : any;
  page : number = 1;

  constructor(private http: HttpClient) {}

  ngOnInit() {

    this.http.get('http://localhost:1337/api/posts?populate=*').subscribe((res : any) =>{
      console.log(res)
      this.data = res.data
    })  
  }
}
