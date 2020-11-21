import { Component, OnInit } from '@angular/core';
import { speciality } from 'src/app/models/speciality';
import { SpecialityService } from 'src/app/services/speciality.service';

@Component({
  selector: 'app-speciality-list',
  templateUrl: './speciality-list.component.html',
  styleUrls: ['./speciality-list.component.scss']
})
export class SpecialityListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name'];
  dataSource : speciality[];

  constructor(
    private specialityService: SpecialityService
  ) { }

  ngOnInit(): void {
    this.specialityService.get().subscribe(data => {
      this.dataSource = data;
    })
  }
}
