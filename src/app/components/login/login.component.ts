import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;


  ngOnInit(): void{
    this.loginForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }
 
  get title(){
    return this.loginForm.get('title')!;
  }

  get password(){
    return this.loginForm.get('password')!;
  }

  submit(){
    console.log("Account created!")
  }
}
