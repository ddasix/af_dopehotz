import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  private currentUser = JSON.parse(localStorage.getItem('currentUser'));
  isLogin: boolean;
  constructor() {
    if (this.currentUser === null) {
        this.isLogin = false;
    }else {
        this.isLogin = true;
    }
  }

  ngOnInit() {
  }

}
