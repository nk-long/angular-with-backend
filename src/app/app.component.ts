import { Component } from '@angular/core';
import {UserService} from './user.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-demo';
  subs = {};
  constructor(private user : UserService){
    this.user.getdata().subscribe(data=>{
      console.warn(data);
      this.subs = data;
     
    });
  }


}
