import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  userType: UserType;

  userTypes = UserType;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {

    this.firstFormGroup = this.formBuilder.group({
      pseudo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      floatLabelControl: ['particular'],
    });

    this.secondFormGroup = this.formBuilder.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      country: [''],
      city: [''],
      sexe: [''],
      experience: [''],
      specialiy: [''],
      yearOfExperience: [''],
      biographie: ['']
    });

  }

  goForward(stepper: MatStepper) {
    this.userType = this.firstFormGroup.controls['floatLabelControl'].value;
    if(this.userType) {
      stepper.next();
    }
  }
}

export enum UserType {
  Particular = 'particular',
  Professional = 'professional'
}
