import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-celebration',
  templateUrl: './celebration.component.html',
  styleUrls: ['./celebration.component.css']
})
export class CelebrationComponent implements OnInit {

  
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
