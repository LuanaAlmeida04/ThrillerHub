import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ThrillerHub-Front';
  urlAtual:string = '';

  constructor(private route:Router){
    
  }

  ngOnInit(){
    this.route.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.urlAtual = e.url;
      }
      
      

    });
  }

}
