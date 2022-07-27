import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient } from '@angular/common/http';
import { BlogDataService } from '../services/blog-data.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  customOptions: OwlOptions = {    
    loop: false,
    dots: true,
    navSpeed: 700,
   
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 3
      },
      740: {
        items: 3
      },
      940: {
        items: 3
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
  totalLength:any;
  page:number = 1; 

  constructor(private http: HttpClient, private blogData:BlogDataService) { }

  ngOnInit(): void {

    // this.http.get('http://localhost:1337/api/posts?populate=*').subscribe((res : any) =>{
    //   console.log(res)
    //   this.data = res.data
    // })  
    this.getData()
  }

  getData(){
    this.blogData.getData().subscribe((res:any) =>{
      this.data=res.data
    })
   }
}
