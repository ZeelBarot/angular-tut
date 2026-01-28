import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.html',
  styleUrl: './variables.css',
})
export class Variables {
  // var courseName = "Angular 21 Tutorial";  // JS string variable
  // string || number || boolean || Date || array

  courseName: string = "Angular 21 Tutorial"; // TS string variable
  currentVersion = "v.21"

  rollNo: number = 45;  // TS number variable
  percentage: number = 88.5;

  isActive: boolean = true;  // TS boolean variable
  isPresent: boolean = false;

  currentDate: Date = new Date(); // TS Date variable

  topics: string[] = ['Components', 'Modules', 'Templates', 'Data Binding']; // TS array variable
  cityList: string[] = ['Pune', 'Mumbai', 'Delhi', 'Bangalore'];

  studentObj = {
    name: 'Zeel Barot',
    mobile: 1234567890,
    email: 'zeel.barot@example.com'
  }

  studentList = [
    { name: 'Alice', city: 'Pune' },
    { name: 'Bob', city: 'Mumbai' },
    { name: 'Charlie', city: 'Delhi' }
  ]

  constructor() {
    // this.courseName = 21; // Error: Type 'number' is not assignable to type 'string'
    this.rollNo = 50;
  }

}
