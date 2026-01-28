import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  courseName = "Angular v-21 Full Course";
  cityName = "Ahmedabad";
  
  className = "primary";

  inputType = "date"; // Dynamic Attribute Binding

  // function name(){      // JS Function
  //   return "Zeel Barot";
  // }

  showWelcomeMsg(){
    alert("Welcome to Angular v-21 Full Course");
  }

  onCityChange(){
    alert("City has been changed");
  }

}
