import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient } from '@angular/common/http';
import { BlogDataService } from '../services/blog-data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  customOptions: OwlOptions = {
    
    loop: false,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      }
    }
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
  routedata:any;
  totalLength:any;
  page:number = 1;
  categoryData:any;

  constructor(private http: HttpClient,private blogData:BlogDataService) { }
  
  // test(eve:any){
  //   this.routedata = eve
  // }
  ngOnInit() {
    
    this.http.get('http://localhost:1337/api/categories?populate=*').subscribe((res:any)=>{
      this.categoryData = res.data
    })


    this.getData()  
   }
    getData(){
    this.blogData.getData().subscribe((res:any) =>{
      this.data=res.data
    })
   }
  }


   