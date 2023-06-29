import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css']
})
export class Section3Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goBack(card :string){
    this.router.navigate([card]);
  }

}
