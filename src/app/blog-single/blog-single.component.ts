import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.css']
})
export class BlogSingleComponent implements OnInit {

  customOptions: OwlOptions = {
    
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
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
      },
      
    },
    nav: true
  }

  id: any;
  title: any[0];
  description: any;
  heading: any;
  author: any;
  image: any[0];
  date: any;
  data : any;
  image1: any[0];


  constructor(private http: HttpClient, private activatedRoute:ActivatedRoute) { }

  
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.http.get('http://localhost:1337/api/posts/' + this.id + '?populate=*').subscribe((res : any) =>{
      this.data = res.data 
      console.log(this.data)
    })  
  }
}
