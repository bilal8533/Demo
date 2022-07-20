import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  id: any[0];
  data : any[0];
  image: any[0];
  image1: any[0];

  constructor(private http: HttpClient) {}

  ngOnInit() {

    this.http.get('http://localhost:1337/api/posts?populate=*').subscribe((res : any) =>{
      console.log(res)
      this.data = res.data
      // console.log(this.data)
    })  
  }
}