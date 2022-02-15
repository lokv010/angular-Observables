import { HttpClient } from '@angular/common/http';
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Subscription, Subscriber } from 'rxjs';
import { ApiService } from './api.service';

@Component({
  selector: 'hello',
  templateUrl: 'hello.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
@Injectable({ providedIn: 'root' })
export class HelloComponent implements OnInit {
  user = ['ram', 'sita', 'ravi'];
  statu: any;
  listposts: any;
  private subscription: Subscription;
   url=`https://jsonplaceholder.typicode.com/posts`;
   usermssg:any;
   gtt:any;

  constructor(private ap: ApiService, private http: HttpClient) {}
  ngOnInit() {
    this.statu = of(this.user);

    new Observable((observer) => {
      setTimeout(() => {
        observer.next('inprogress');
      }, 2000);

      setTimeout(() => {
        observer.next('inloading');
      }, 4000);

      setTimeout(() => {
        observer.next('expired');
      }, 8000);
    }).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
   

    
      this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(
        (rdata) => {
          this.listposts = rdata;
          console.log(rdata);
        },
        (error) => {
          console.log(error);
        }
      );
    
      this.http.get("https://jsonplaceholder.typicode.com/posts") .toPromise()
      .then(respons=>{
        this.listposts=respons;
      }).catch(error=>{
        console.log(error);
      }).finally(()=>{
        this.usermssg='posts loaded';
      })
  
  
  
    }
  

 
 
  
}

