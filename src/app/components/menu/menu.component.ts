import { Component, OnInit } from '@angular/core';
import {faCompass} from '@fortawesome/free-solid-svg-icons'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import {faCogs} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
// import {faBraille} from '@fortawesome/free-solid-svg-icons'
// import {faBraille} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  faCompass = faCompass
  faStar = faStar
  faCogs = faCogs
  faUser = faUser
  constructor() { }

  ngOnInit(): void {
  }

}
