import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {
  
  // url= 'http://localhost:1337/api/posts?populate=*'; 
  constructor(private http: HttpClient) { }
  getData( )
  {
    return this.http.get('http://localhost:1337/api/posts?populate=*')
  }   

}
