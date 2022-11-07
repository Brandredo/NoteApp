import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeColorOnHover]'
})
export class ChangeColorOnHoverDirective implements OnInit {

  @HostBinding('style.color') textColor: string = 'white';


  constructor(private renderer: Renderer2, private element: ElementRef) { }

  ngOnInit(): void {
    
  }

  // host listener is convenient for listening for events on an element
  @HostListener('mouseover') mouseover(data: Event) {
    // this.renderer.setStyle(this.element.nativeElement, 'color', 'pink');
    this.textColor = 'hotpink';
  }

  @HostListener('mouseleave') mouseleave(data: Event) {
    // this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
    this.textColor = 'white';
  }

}
