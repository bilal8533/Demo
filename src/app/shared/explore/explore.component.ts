import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  id:any;
  title:any;
  categoryData:any;

  constructor(private http: HttpClient ) { }

  ngOnInit() {
    this.http.get('http://localhost:1337/api/categories?populate=*').subscribe((res:any)=>{
      this.categoryData = res.data
    })
}

}
