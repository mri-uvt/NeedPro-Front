import { Component, OnInit } from '@angular/core';
import { domain } from 'src/app/models/domain';
import { DomainService } from 'src/app/services/domain.service';

@Component({
  selector: 'app-domain-list',
  templateUrl: './domain-list.component.html',
  styleUrls: ['./domain-list.component.scss']
})

export class DomainListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name'];
  dataSource : domain[];

  constructor(
    private domainService: DomainService
  ) { }

  ngOnInit(): void {
    this.domainService.get().subscribe(data => {
      this.dataSource = data;
    })
  }

}
