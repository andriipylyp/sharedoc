import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {CookieService} from 'ngx-cookie-service'
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  login(){
    //TODO
  }

  constructor() { }

  ngOnInit(): void {
  }

}
