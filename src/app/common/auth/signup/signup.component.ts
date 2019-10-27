import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { TavernItem } from '../../../obj_templates/tavern';
import { TavernsService, ITavern } from '../../../services/taverns.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {

  // init vars
  userName = '';
  password = '';
  roleId:number;
  //tavernList:TavernItem[];
  tavernList: ITavern[];

  constructor(private tavernsService:TavernsService) {}

  signup(formName: NgForm): void {
      console.log('New user sign up');
      console.log('User = '+this.userName);
      console.log('Password = '+this.password);
      formName.reset();
  }

  ngOnInit() {
    this.getTaverns();
    // DELETE ME once service is created to get the tavernList
    // this.tavernList = [
    //   {
    //     name:"Cheers",
    //     id:1
    //   },
    //   {
    //     name:"No name Bar",
    //     id:2
    //   },
    //   {
    //     name:"Fancy Pants",
    //     id:3
    //   },
    //   {
    //     name:"Moe's Tavern",
    //     id:4
    //   }
    // ]
  }

  setTavernRole(Id:number){
    console.log('role id is ',Id)
    this.roleId = Id;
  }

  getTavernRole(): number{
    return this.roleId;
  }

  getTaverns(){
    console.log('inside signup.component - getTaverns');

    this.tavernsService.getAll().subscribe((Tav) => {
      console.log('inside signup.component - subscribe');
      this.tavernList = Tav;
    });
    console.log("Inside signup.components Tavern List = ",this.tavernList);
    return this.tavernList;
  }
}
