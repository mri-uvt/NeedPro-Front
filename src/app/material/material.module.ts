import { NgModule } from '@angular/core';

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
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

const AngularMaterialModules = [
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
  MatMenuModule,
  MatGridListModule,
  MatSidenavModule,
  MatListModule,
  MatTableModule
];

@NgModule({
  imports: [AngularMaterialModules],
  exports: [AngularMaterialModules]
})
export class MaterialModule { }
