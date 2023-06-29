import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component implements OnInit {
 

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  goBack(card :string){
    this.router.navigate([card]);
  }

}
