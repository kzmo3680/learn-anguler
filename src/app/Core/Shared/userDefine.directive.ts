import { Directive, ElementRef, HostBinding, HostListener, OnInit, input } from '@angular/core';

@Directive({
  selector: '[userdefine]',
  standalone: true,
  exportAs : 'directive-user',
  host:{'click': 'onClick('}
})
export class UserDefine implements OnInit {
  color = input.required<string>({
    alias: 'color',
  });

  padding = input.required<string>({
    alias: 'p',
  });

  bg = input.required<string>();

  constructor(private el: ElementRef) {
    console.log('Directive created');
  }

  ngOnInit(): void {
    this.addStyle();
  }

  // @HostListener('click', ['$event']) onClick(e: any): void {

  //   this.el.nativeElement.style.border = '3px solid red';
  //   this.el.nativeElement.style.padding = `${Number(this.padding()) + 10}px`;
  // }

  
  @HostBinding('style.padding') styleBackgroundColor : string = '50px';
  
  @HostBinding('style') allStyle: string = '';
  
  @HostListener('click' ) onClick() : void{
    console.log('Clicked');
    this.allStyle = `color: green`;
  }
  private addStyle(): void {
    this.allStyle = 
    `color:${this.color()};background-color:${this.bg()};padding:${this.padding()}px`;
  }
}
