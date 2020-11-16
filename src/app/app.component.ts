import { Component,Inject  } from '@angular/core';
import { DOCUMENT  } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 Header=true;
 Namepath=this.document.location.pathname;

  constructor( @Inject(DOCUMENT) private document: Document) {
  
    if (this.Namepath=="/"){
      this.Header=false;
    }  
    
    
  }
 


}
