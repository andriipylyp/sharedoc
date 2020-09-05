import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {CookieService} from 'ngx-cookie-service'
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  private cookieService: CookieService
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })

  registrationForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    therapist: new FormControl(''),
  })

  loginSubmit(){
    this.cookieService.set('therapist', 'true')
  }

  registrationSubmit(){
    // TODO
  }

  constructor() { }

  ngOnInit(): void {
  }

}
