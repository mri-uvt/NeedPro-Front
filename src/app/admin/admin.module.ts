import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { SettingsComponent } from './settings/settings.component';
import { DomainListComponent } from './domain/domain-list/domain-list.component';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { CountryListComponent } from './country/country-list/country-list.component';
import { CityListComponent } from './city/city-list/city-list.component';
import { SpecialityListComponent } from './speciality/speciality-list/speciality-list.component';

@NgModule({
    declarations: [
        SettingsComponent,
        DomainListComponent,
        CountryListComponent,
        CityListComponent,
        SpecialityListComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        MaterialModule
    ],
    exports: [
        SettingsComponent,
        DomainListComponent
    ],
    providers: []
})

export class AdminModule {

}