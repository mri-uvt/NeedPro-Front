import { Component, OnInit } from '@angular/core';
import { country } from 'src/app/models/country';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name'];
  dataSource : country[];

  constructor(
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
    this.countryService.get().subscribe(data => {
      this.dataSource = data;
    })
  }

}
