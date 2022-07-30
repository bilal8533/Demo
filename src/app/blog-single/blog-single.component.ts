import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  data: any;
  image1: any[0];
  comment: any;
  commentreply:any;
  comments:any;



  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private fb: FormBuilder) {

    this.comment = new FormGroup({
      "description": new FormControl(null, Validators.required),
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "website": new FormControl(null, Validators.required),
      "name": new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z]+$')])
    })
  }


  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.http.get('http://localhost:1337/api/posts/' + this.id + '?populate=*').subscribe((res: any) => {
      this.data = res.data
      console.log(this.data)
    })
   
  }

  reply(){
    console.log(this.commentreply.value)
    let data ={
      "name" : this.name.value,
      "commentreply":this.commentreply.value
    }
    this.http.post('http://localhost:1337/api/commentreplies?populate=*', {data}).subscribe(function(res){
      console.log(res)
    })

  }

  send() {
    console.log(this.comment.value)
    let data = {
      "description": this.dscription.value,
      "email": this.email.value,
      "website": this.website.value,
      "name": this.name.value
    }
    this.http.post('http://localhost:1337/api/comments?populate=*', { data }).subscribe(function (res) {
      console.log(res)
    })
  }

  get dscription() { return this.comment.get('description'); }
  get email() { return this.comment.get('email'); }
  get website() { return this.comment.get('website'); }
  get name() { return this.comment.get('name'); }
}