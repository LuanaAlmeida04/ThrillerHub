import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit{
  direction:any = document.getElementById("img");
  
  
  constructor(){}

  ngOnInit(): void {
    console.log(this.direction)
  }

  move(e: number){
    if (e == 1){
      this.direction?.scrollLeft == this.direction?.scrollLeft + 300;
    }
    else if(e == 2){
      this.direction?.scrollLeft == this.direction?.scrollLeft - 300;
    }
    
  }
}
