import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor(private router: Router) { }
  Logo: string;
  ngOnInit(): void {
    this.Logo = "C:/Users/soumaya/mpwin/NeedPro/NeedPro-Front/src/logo.jpg";
  }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,

  ]);
  hide = true;
  get passwordInput() { return this.passwordFormControl; }

  Login() {
    if (this.existUser(this.emailFormControl.value, this.passwordFormControl.value)) {
      // this.router.navigateByUrl('');

    }
    else {

    }
  }
  existUser(email, password) {
    return false;

  }

}

