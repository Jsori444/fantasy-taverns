import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {
  userName = '';
  password = '';

  constructor() {}

  signup(formName: NgForm): void {
      console.log('New user sign up');
      console.log('User = '+this.userName);
      console.log('Password = '+this.password);
      formName.reset();
  }
  ngOnInit() {
  }

}
