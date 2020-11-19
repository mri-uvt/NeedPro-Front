import { Component, OnInit } from '@angular/core';
import { domain } from '../models/domain';
import { speciality } from '../models/speciality';
import { DomainService } from '../services/domain.service';
import { SpecialityService } from '../services/speciality.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  domaines: domain[];
  specialites: speciality[];

  constructor(
    private domainService: DomainService,
    private specialityService: SpecialityService
  ) { }

  ngOnInit(): void {
    this.domainService.get().subscribe( data => {
      this.domaines = data;
    });

    this.specialityService.get().subscribe( data => {
      this.specialites = data;
    });
  }

}
