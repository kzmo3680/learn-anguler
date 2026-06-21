import { Component, ElementRef, QueryList, signal, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./component/Utility/navbar/navbar";
import { Footer } from './Core/Shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar,Footer],
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
