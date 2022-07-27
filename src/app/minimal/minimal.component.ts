import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogDataService } from '../services/blog-data.service';

@Component({
  selector: 'app-minimal',
  templateUrl: './minimal.component.html',
  styleUrls: ['./minimal.component.css']
})
export class MinimalComponent implements OnInit {


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


  constructor(private http: HttpClient, private blogData:BlogDataService) {}

  ngOnInit() {

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
