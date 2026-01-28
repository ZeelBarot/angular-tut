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
  rollNo = signal (101);
  student = signal ({name: 'Zeel', age: 21, city: 'Ahmedabad'});
  cityList = signal (['Ahmedabad', 'Surat', 'Vadodara','Rajkot','Bhavnagar']);

  constructor(){
    console.log(`Before `+ this.courseName());
    
    setTimeout(() => {
      this.courseName.set("React JS");
      console.log(`After `+ this.courseName());
    }, 3000);
  }

  changeCourseName(){
    this.courseName.set("Java");
  }
}