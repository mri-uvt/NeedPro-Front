import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';


import { FourOhFourComponent } from './core/four-oh-four/four-oh-four.component';
import { HeaderComponent } from './core/header/header.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { AuthenticationComponent } from './user/authentication/authentication.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';



const modules = [
  MatToolbarModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatRadioModule,
  MatIconModule,

  

];

@NgModule({
  declarations: [
    AppComponent,
    FourOhFourComponent,
    HeaderComponent,
    RegistrationComponent,
    AuthenticationComponent,

    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
   
    modules
  ],
  exports: [
    modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
