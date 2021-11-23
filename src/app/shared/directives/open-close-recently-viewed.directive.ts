import { AfterViewInit, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOpenCloseRecentlyViewed]',
})
export class OpenCloseRecentlyViewedDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click') onClick() {
    this.changeView();
  }
  private changeView() {
    let container = this.el.nativeElement.parentNode;
    if (!container.classList.contains('open')) {
      container.classList.add('open');
      this.el.nativeElement.innerHTML = 'X';
    } else {
      container.classList.remove('open');
      this.el.nativeElement.innerHTML = 'Recently viewed';
    }
  }
}
