import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[InputFormat]'
})
export class InputFormatDirective {
  //ElementRef is a dependency used to access elements in the native element environment
  constructor( private ref: ElementRef) { }
  ///A custom directive is used to format a certain tag to act in a specific way that the developer wants
  ///i can also use @input and @output inside a custom directive.
  @HostListener('focus') onFocus(){
    console.log('focused');
  }

  @HostListener('blur') onBlur(){
    const getValue:string = this.ref.nativeElement.value;
    this.ref.nativeElement.value = getValue.toUpperCase();
  }

}
