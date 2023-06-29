import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }
  navigateToSection(card :string){
    this.router.navigate([card]);
  }

}
