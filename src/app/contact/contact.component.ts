import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: any;
  id: any;

  constructor(private http : HttpClient, private fb : FormBuilder) { 

    this.contact = new FormGroup({
      "Name": new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      "Email": new FormControl(null,[Validators.required, Validators.email]),
      "Subject": new FormControl(null, Validators.required),
      "Message": new FormControl(null, Validators.required)
  })
  }

  ngOnInit(): void {
    
  }

  send()  {
    console.log(this.contact.value)
     
    let data = {
      "Name": this.Name.value,
      "Email": this.Email.value,
      "Subject": this.Subject.value,
      "Message": this.Message.value
    }
    this.http.post('http://localhost:1337/api/contacts', {data}).subscribe(function (res) {
      console.log(res)
    })
  }
  get Name() { return this.contact.get('Name'); }
  get Email() { return this.contact.get('Email'); }
  get Subject() { return this.contact.get('Subject'); } 
  get Message() { return this.contact.get('Message'); } 
}
