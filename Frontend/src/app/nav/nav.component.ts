import { Component, OnInit } from '@angular/core';
//nav barj
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  loggedIn(){
    return localStorage.getItem('token');
  }
  onLogOut(){
    localStorage.removeItem('token');
  }
}
