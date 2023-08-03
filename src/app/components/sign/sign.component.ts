import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms'
import { matchpassword } from 'src/app/matchpassword.validator';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit{

  signForm!: FormGroup;


  ngOnInit(): void{
    this.signForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      passconfirm: new FormControl('')
    
    },
    {
      validators: matchpassword,
    })
  }
 
  get title(){
    return this.signForm.get('title')!;
  }

  get password(){
    return this.signForm.get('password')!;
  }

  get passconfirm(){
    return this.signForm.get('passconfirm')!;
  }

  submit(){
    console.log("Account created!")
  }

  constructor(){}
}
