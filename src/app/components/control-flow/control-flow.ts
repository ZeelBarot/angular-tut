import { NgClass } from '@angular/common';
import { Component, signal, Signal, WritableSignal} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule, NgClass],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {

  isOfferCodeAvailable: boolean = false;
  studentTotalMarks: number = 0;

  isSuccessDivVisible: WritableSignal<boolean> = signal(false);

  offerList: string[] = [
    "10% OFF for PayTm",
    "15% OFF for GPay",
    "20% OFF for ICICI Credit Card",
    "25% OFF for Amazon Pay"
  ]

  productCategoryList: string[] = [
    "Mobile",
    "Laptop",
    "Camera",
    "HeadPhone",
    "Smart Watch",
    "Speaker"
  ]

  employeeList = [
    {name: 'AAA', city: 'Pune', isActive: false},
    {name: 'BBB', city: 'Mumbai', isActive: false},
    {name: 'CCC', city: 'Bangalore', isActive: true},
    {name: 'DDD', city: 'Chennai', isActive: true},
    {name: 'EEE', city: 'Hyderabad', isActive: false},
    {name: 'FFF', city: 'Kolkata', isActive: false},
    {name: 'GGG', city: 'Delhi', isActive: false},
    {name: 'HHH', city: 'Jaipur', isActive: false}
  ]

  toggleDivVisibility(){
    this.isSuccessDivVisible.set(!this.isSuccessDivVisible());
  }
}