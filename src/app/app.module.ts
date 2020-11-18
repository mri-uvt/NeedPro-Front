import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**Components */
import { FourOhFourComponent } from './core/four-oh-four/four-oh-four.component';
import { HeaderComponent } from './core/header/header.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { AuthenticationComponent } from './user/authentication/authentication.component';
import { HomeComponent } from './home/home.component';

/**Angular Material */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const modules = [
  MatToolbarModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatRadioModule,
  MatAutocompleteModule,
  MatIconModule,
  MatChipsModule,
  MatDialogModule,
  MatSnackBarModule,
  MatMenuModule
];

@NgModule({
  declarations: [
    AppComponent,
    FourOhFourComponent,
    HeaderComponent,
    RegistrationComponent,
    AuthenticationComponent,
    HomeComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    modules
  ],
  exports: [
    modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
