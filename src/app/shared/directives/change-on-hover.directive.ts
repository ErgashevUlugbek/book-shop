import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeOnHover]',
})
export class ChangeOnHoverDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') OnMouseEnter() {
    this.changeBg('lightGray');
  }

  @HostListener('mouseleave') OnMouseLeave() {
    this.changeBg(null);
  }

  private changeBg(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
