import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appCustomDir]'
})
export class CustomDirDirective {

  constructor(private e1:ElementRef) {
    e1.nativeElement.style.color="yellow";
   }

}
