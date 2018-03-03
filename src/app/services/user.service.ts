import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { User } from "app/models/user";
 
@Injectable()
export class UserService {
    err=null;
   constructor(private http: Http) {
   }
 
   getUsers(): Observable<User[]> {
       console.log("abc");
      return this.http.get("https://jsonplaceholder.typicode.com/users")
         .map((res: Response) => 
         {
            
            console.log(res.status);
         if(res.status < 200 || res.status >= 300) {
            
             console.log(res.status);
            throw new Error('This request has failed ' + res.status);
          } 
          else
          {
            console.log(res.status);
             return res.json()
          }
        })
         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }
}