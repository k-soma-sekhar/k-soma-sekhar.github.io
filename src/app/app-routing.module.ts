import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';


const routes: Routes = [
 {path:'', redirectTo: '/home', pathMatch: 'full'},
 { path:'home', component:HomePageComponent},
 { path: 'technology', component: Section1Component},
 { path: 'science', component: Section2Component},
 { path: 'healthcare', component: Section3Component},
 { path: 'business', component: Section4Component}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
