import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})

export class AuthenticationComponent implements OnInit {
  authFormGroup: FormGroup;
  hide = true;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.authFormGroup = this.formBuilder.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',Validators.required]
    });
  }

  emailFormErrors(error: string) {
    return this.authFormGroup.controls['email'].hasError(error);
  }
  
  passwordFormErrors(error: string) {
    return this.authFormGroup.controls['password'].hasError(error);
  }
  
  Login() {
    if (this.existUser(this.authFormGroup.controls['email'].value, this.authFormGroup.controls['password'].value)) {
      // this.router.navigateByUrl('');
    }
    else {

    }
  }

  existUser(email, password) {
    return false;
  }



}

