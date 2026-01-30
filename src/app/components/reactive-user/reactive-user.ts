import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-reactive-user',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-user.html',
  styleUrl: './reactive-user.css',
})
export class ReactiveUser {
  userForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(5)]),
    username: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });
}
