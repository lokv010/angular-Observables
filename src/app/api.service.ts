import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class ApiService {

  constructor(private ht:HttpClient) { }

//   getposts():Observable<Object>{
// return this.ht.get('https://jsonplaceholder.typicode.com/posts');
//   }
}