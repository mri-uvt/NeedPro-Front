import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  lstMenu : {name:string; routerLink: string;}[];

  constructor() { }

  ngOnInit(): void {
    this.lstMenu = [
      { 
        name:'Domaine', 
        routerLink: 'domain'
      },
      { 
        name:'Spécialité', 
        routerLink: 'speciality'
      },
      { 
        name:'Pays', 
        routerLink: 'country'
      },
      { 
        name:'Région', 
        routerLink: 'city'
      },
    ];
  }

}
