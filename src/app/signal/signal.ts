import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal   {
  // ************* NORMAL VARIABLE *************
  // courseName = 'Angular 21';

  // constructor(){
  //   console.log(`Before `+ this.courseName);
    
  //   setTimeout(() => {
  //     this.courseName = "React JS";
  //     console.log(`After `+ this.courseName);
      
  //   }, 3000);
  // }

  // ************* SIGNAL VARIABLE *************
  courseName = signal ('Angular 21');
  constructor(){
    console.log(`Before `+ this.courseName());
    
    setTimeout(() => {
      this.courseName.set("React JS");
      console.log(`After `+ this.courseName());
    }, 3000);
  }
}