import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { TavernItem } from '../../../obj_templates/tavern';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
  userName = '';
  password = '';
  roleId:number;
  tavernList:TavernItem[];

  constructor() {}

  signup(formName: NgForm): void {
      console.log('New user sign up');
      console.log('User = '+this.userName);
      console.log('Password = '+this.password);
      formName.reset();
  }

  ngOnInit() {
    // DELETE ME once service is created to get the tavernList
    this.tavernList = [
      {
        name:"Cheers",
        id:1
      },
      {
        name:"No name Bar",
        id:2
      },
      {
        name:"Fancy Pants",
        id:3
      },
      {
        name:"Moe's Tavern",
        id:4
      }
    ]
  }

  setTavernRole(Id:number){
    console.log('role id is ',Id)
    this.roleId = Id;
  }

  getTavernRole(): number{
    return this.roleId;
  }

  getTaverns(){
    return this.tavernList;

  }
}
