import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username: string = ''
  password: string = ''
  emailAddress: string = ''

  constructor(private userService:UserService) {

  }
  ngOnInit(): void {

  }

  registerNewUser(){
    this.userService.createUser({
      Name:this.username,
      Email:this.emailAddress,
      Password:this.password
      }
    ).subscribe(model => {
      
    })
  }



}
