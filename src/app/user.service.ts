import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  

  constructor(private http:HttpClient) { }

  getdata() {
    let url = 'http://localhost:4000/people';
    return this.http.get(url);
  }
}
