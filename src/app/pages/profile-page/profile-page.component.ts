import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  changePasswordForm = new FormGroup({
    newPassword: new FormControl(''),
    repeatPassword: new FormControl('')
  })

  changeUsernameForm = new FormGroup({
    newUsername: new FormControl(''),
    currentUsername: new FormControl('')
  })
  repeatPassword: string
  currentUsername: string
  changePassword(){
    // TODO
  }
  changeUsername(){
    // TODO
  }
  constructor() { }

  ngOnInit(): void {
    
  }

}
