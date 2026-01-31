import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Master {
  // store data
  // create api call function 70%
  // create subject or behaviotrSubject
  // utility function & helper function

  addTwoNum(num1: number, num2: number){
    const sum = num1 + num2;
    return sum;
  }
}
