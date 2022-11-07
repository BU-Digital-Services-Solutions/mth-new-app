import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) {

   }
routpath="";

  ngOnInit(): void {
    console.log("asdf");
    console.log(this.router.url );
    
   this.routpath=this.router.url;
  }



}
