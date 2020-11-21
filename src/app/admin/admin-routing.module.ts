import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { DomainListComponent } from './domain/domain-list/domain-list.component';
import { SpecialityListComponent } from './speciality/speciality-list/speciality-list.component';
import { CountryListComponent } from './country/country-list/country-list.component';
import { CityListComponent } from './city/city-list/city-list.component';

const adminRoutes: Routes = [
    {
        path: 'settings',
        component: SettingsComponent,
        children: [
            {
                path: 'domain',
                component: DomainListComponent
            },
            {
                path: 'speciality',
                component: SpecialityListComponent
            },
            {
                path: 'country',
                component: CountryListComponent
            },
            {
                path: 'city',
                component: CityListComponent
            }
        ]
    },
    { path:'**', component: SettingsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})

export class AdminRoutingModule { }
