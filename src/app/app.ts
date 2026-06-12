import { Component, ElementRef, QueryList, signal, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./component/Utility/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  encapsulation : ViewEncapsulation.Emulated
})
export class App {
  protected readonly title = signal('first-project');

    userName : string = "Ahmedzzz";

    

    changeUserName() : void{
      console.log("Hello World!")
      this.userName = "ali";
    }

}
