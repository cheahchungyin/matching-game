import {
  Directive,
  ContentChild,
  AfterViewInit,
  Renderer2,
  ElementRef,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements AfterViewInit {
  @ContentChild('dropdownMenu', {static: false}) dropdownMenu: ElementRef;
  toggled = false;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.removeClass(this.dropdownMenu.nativeElement, 'show');
  }

  @HostListener('click') toggleDropdown() {
    if (!this.toggled) {
      this.renderer.addClass(this.dropdownMenu.nativeElement, 'show');
    } else {
      this.renderer.removeClass(this.dropdownMenu.nativeElement, 'show');
    }
    this.toggled = !this.toggled;
  }
}

