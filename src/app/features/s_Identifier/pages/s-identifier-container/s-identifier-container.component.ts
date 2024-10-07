import { CommonModule, NgClass, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-s-identifier-container',
  standalone: true,
  imports: [
    HttpClientModule,
   ReactiveFormsModule,
    CommonModule
   
  ],
  templateUrl: './s-identifier-container.component.html',
  styleUrl: './s-identifier-container.component.scss'
})
export class SIdentifierContainerComponent implements OnInit {

  type: string = 'password';
  isText: boolean = false;

  inscriptionInfo !: FormGroup;
  isSaveButtonClicked = false;
  eyeIcon:string = "fa-eye-slash"
  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.getInitform
  // this.inscriptionInfo = new FormGroup({
  //     username: new FormGroup('',[Validators.required]) ,
  //    email:new FormGroup('',[Validators.required]) ,
  //     password: new FormGroup('',[Validators.required]) ,
  //      passcomfirm: new FormGroup('',[Validators.required])
  // });

  }
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = 'fa-eye' : this.eyeIcon = 'fa-eye-slash'
    this.isText ? this.type = 'text' : this.type = 'password'
  }

  getInitform(): void{
    this.inscriptionInfo= this.fb.group({
      userName: ["",Validators.required],
      email:["", Validators.required, Validators.email],
      password: ["", Validators.required],
      passcomfirm:["", Validators.required],
    })
  }
  gettextsendinfoToConsol(){
    // this.isSaveButtonClicked = true;
    // if (this.inscriptionInfo.invalid === true) {
    //   return;
    // }
  }
  getPassword(){
    return this.inscriptionInfo.value.userName;
  }
  onsubmiButton(){
//     if(this.inscriptionInfo.valid && this.inscriptionInfo.value.password === this.inscriptionInfo.value.passcomfirm){
// console.log("le formulaire recue avec sucess");
//     } else{
//       alert('le mot de passe ne correspond pas');
//     }
  }
  onSubmit() {
    if (this.inscriptionInfo.valid) {
      console.log(this.inscriptionInfo.value);
    }

   

  }
}
