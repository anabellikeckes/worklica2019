import { Directive, ElementRef, HostListener, Input, AfterViewInit } from '@angular/core';

@Directive({
    selector: '[myColor]'
})

export class ColorDirective implements AfterViewInit {

    @Input() myColor: string;

    constructor(private el: ElementRef) {}

    ngAfterViewInit(): void {
        this.flowerColor(this.myColor);
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.flowerColor('green');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.flowerColor(this.myColor);
    }

    private flowerColor(color: string) {
        this.el.nativeElement.style.color = color;
    }
}
