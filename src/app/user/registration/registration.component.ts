import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatStepper } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CityService } from 'src/app/services/city.service';
import { city } from 'src/app/models/city';
import { CountryService } from 'src/app/services/country.service';
import { country } from 'src/app/models/country';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  @ViewChild('skillInput') skillInput: ElementRef<HTMLInputElement>;

  /** Chip */
  selectable = true;
  removable = true;
  filteredSkills: Observable<string[]>;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  
  /** Forms */
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  /** Lists */
  countrys: string[] = ['Tunisie','Algerie','Maroc'];
  cities: city[];
  countries: country[];
  categorys: string[] = ['Scientifique','Informatique'];
  skills: string[] = ['XML'];
  allSkills: string[] = ['C#','HTML','TypeScript','JAVA','SQL','Git'];

  /** Enums */
  userType: UserType;
  userTypes = UserType;

  constructor(
    private formBuilder: FormBuilder,
    private snakeBar : MatSnackBar,
    private cityService: CityService,
    private countryService: CountryService
    ) {
    this.filteredSkills = this.firstFormGroup?.controls['skills']?.valueChanges?.pipe(
      startWith(null),
      map((skill: string | null) => skill ? this.filter(skill) : this.allSkills.slice()));
  }

  ngOnInit() {
    this.initForms();
    this.initCities();
    this.initCountries();
  }

  initForms() {
    this.firstFormGroup = this.formBuilder.group({
      pseudo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      type: ['particular'],
    });

    this.secondFormGroup = this.formBuilder.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      country: [''],
      city: [''],
      sexe: ['man'],
      category: [''],
      specialiy: [''],
      yearOfExperience: [''],
      biography: [''],
      skills: ['']
    });
  }

  initCities(){
    this.cityService.get().subscribe(data => {
      this.cities = data;
    });
  }

  initCountries(){
    this.countryService.get().subscribe(data => {
      this.countries = data;
    });
  }

  goForward(stepper: MatStepper) {
    this.userType = this.firstFormGroup.controls['type'].value;
    if(this.userType) {
      stepper.next();
    }
  }

  addChip(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add our fruit
    if ((value || '').trim()) {
      this.skills.push(value.trim());
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
    this.firstFormGroup.controls['skills'].setValue(null);
  }

  remove(skill: string): void {
    const index = this.skills.indexOf(skill);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.skills.push(event.option.viewValue);
    this.skillInput.nativeElement.value = '';
    this.firstFormGroup?.controls['skills']?.setValue(null);
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allSkills.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }

  reset(stepper: MatStepper){
    stepper.reset();
    this.snakeBar.open("Le formulaire est réinitialiser !",'X',{duration:1000});
  }

  valid(){
    this.snakeBar.open("Votre compte est créer !",'X',{duration:1000});
  }

}

export enum UserType {
  Particular = 'particular',
  Professional = 'professional'
}
