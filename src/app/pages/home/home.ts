import { CurrencyPipe, JsonPipe, PercentPipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { LowerCasePipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { Testpipe } from '../../Core/pipes/test.pipe';
import { TransformCustomPipePipe } from '../../Core/pipes/transform-custom-pipe-pipe';
import { UserDefine } from '../../Core/Shared/userDefine.directive';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, RouterLinkWithHref , UpperCasePipe, LowerCasePipe,DatePipe,SlicePipe,JsonPipe,PercentPipe,CurrencyPipe,Testpipe ,TransformCustomPipePipe,UserDefine],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  userName : string = "Ahmed";
  userDate : Date = new Date();
  userFriends :string[] = ["Ali" , "Ahmed" , "Mona"];
  userObject : {userAge : number , lastName : string} = {userAge : 30 , lastName : "Karim"};
  userSuccess : number = 0.6;
  userSalary : number = 10_000;
  userCustomPipe : string = "Hello World I am Come from egypt and will leave it soon..."


  getUserName() : void {
    let username = {name : "Ahmed"};
    let newUserName = {...username};
    
    console.log(username);
    console.log(newUserName);
  }

  ngOnInit() : void {
    this.getUserName();
  }



}
