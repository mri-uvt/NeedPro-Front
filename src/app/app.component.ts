import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showHeader: boolean = true;

  constructor(
    private router: Router
  ) {  }

  ngOnInit() {
    const url = this.router.routerState.snapshot.url;
    if (url === '/registration' || url === '/login') {
      this.showHeader = false;
    }
  }

}
