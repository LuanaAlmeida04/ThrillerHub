import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPreviousButton]'
})
export class PreviousButtonDirective {

  constructor(private el:ElementRef) { 
  }

  @HostListener('click')
  prevFunc(){
    var elm = this.el.nativeElement.parentElement.parentElement.parentElement.children[0];
    var item = elm.getElementsByClassName("item")
    elm.prepend(item[item.lenght - 1]);

  }
}
