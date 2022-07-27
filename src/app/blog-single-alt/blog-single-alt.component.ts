import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BlogDataService } from '../services/blog-data.service';


@Component({
  selector: 'app-blog-single-alt',
  templateUrl: './blog-single-alt.component.html',
  styleUrls: ['./blog-single-alt.component.css']
})
export class BlogSingleAltComponent implements OnInit {

  customOptions: OwlOptions = {

    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
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
    nav: true
  }

  id: any[0];
  title: any[0];
  description: any;
  heading: any;
  author: any;
  image: any[0];
  date: any;
  data: any[0];
  image1: any[0];


  constructor(private http: HttpClient, private blogData: BlogDataService) { }


  ngOnInit() {

    // this.http.get('http://localhost:1337/api/posts?populate=*').subscribe((res : any) =>{
    //   console.log(res)
    //   this.data = res.data
    // })  
    this.getData()
  }
  getData() {
    this.blogData.getData().subscribe((res: any) => {
      this.data = res.data
    })
  }
}