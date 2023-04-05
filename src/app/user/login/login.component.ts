import { Component, Inject, OnInit } from '@angular/core';

import { UserService } from '../service/user.service';
import { LocalStorageToken } from 'src/app/localstorage.token';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = ''
  password: string = ''

  constructor(private userService: UserService, @Inject(LocalStorageToken) private storage:Storage,private router:Router) {

  }
  ngOnInit(): void {
    if(this.storage.getItem("access_token") !== ''){
      this.router.navigateByUrl("/home")
    }
  }

  loginUser() {
    this.userService
      .loginUser(this.username, this.password)
      .subscribe((res) => {
        this.storage.setItem('access_token',res.access_token)
        this.storage.setItem('username',res.username)
        this.router.navigateByUrl('/home')
      })
  }

}
