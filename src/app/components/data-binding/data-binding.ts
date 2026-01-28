import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
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

  changeCourseName(text: string){
    this.courseName = text;
  }

}
