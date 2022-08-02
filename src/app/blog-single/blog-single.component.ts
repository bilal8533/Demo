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
  comments: any[0];
  commentReply:any;
  Data:any
  
  

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
     this.getData()
     this.getComments()
     this.getCommentReply()
     console.log(this.comments);     
     console.log(this.Data);     
  }

  getData(){
    this.http.get('http://localhost:1337/api/posts/' + this.id + '?populate=*').subscribe((res: any) => {
      this.data = res.data
      console.log(this.data)
    }) 
  }

  getComments(){
    this.http.get('http://localhost:1337/api/comments?populate=*').subscribe((res:any)=>{
      
      let Data = []
      for(let i=0;i<res.data.length;i++){        
        if(res.data[i].attributes.post.data.id == this.id){
          Data.push(res.data[i])
        } 
      }
      this.comments = Data
      console.log(this.comments);      
      })
  }

  getCommentReply(){
    var Data = new Map()
    this.http.get('http://localhost:1337/api/commentreplies?populate=*').subscribe((res:any)=>{
      this.commentReply=res.data
      console.log(this.commentReply);      
      for(let i =0;i<this.comments.length;i++){
        // console.log(this.comments[i].id);
        for(let j =0;j < res.data.length;j++){
          console.log(res.data[j].attributes.reply.data.id);         
          if(res.data[j].attributes.reply.data.id == this.comments[i].id){
            Data.set(this.comments[i].id,res.data[i])
          }
        }
      }
      this.Data = Data
      // console.log(this.Data);
    })
  }
  reply(){
    console.log(this.commentreply.value)
    let data ={
      "name" : this.name.value,
      "commentreply":this.commentreply.value
    }
    this.http.post('http://localhost:1337/api/commentreplies',{data}).subscribe((res : any) =>{
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
    this.http.post('http://localhost:1337/api/comments', { data }).subscribe((res: any)=> {
      console.log(res)
    })
  }
  get dscription() { return this.comment.get('description'); }
  get email() { return this.comment.get('email'); }
  get website() { return this.comment.get('website'); }
  get name() { return this.comment.get('name'); }
}