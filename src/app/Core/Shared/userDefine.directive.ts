import { Directive, ElementRef } from "@angular/core";


@Directive({
    selector :"[userdefine]",
    standalone : true
})

export class UserDefine {

    constructor(private el:ElementRef){

    }

    addStyle() : void {
        this.el.nativeElement.style.color= 'red';
    }

    ngOnInit() : void {
        this.addStyle();
    }
}