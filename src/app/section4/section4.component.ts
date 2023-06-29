import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.css']
})
export class Section4Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goBack(card: string){
    this.router.navigate([card]);
  }

}
