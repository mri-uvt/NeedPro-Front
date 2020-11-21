import { Component, OnInit } from '@angular/core';
import { city } from 'src/app/models/city';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name'];
  dataSource : city[];

  constructor(
    private cityService: CityService
  ) { }

  ngOnInit(): void {
    this.cityService.get().subscribe(data => {
      this.dataSource = data;
    })
  }

}
