import { Component, OnInit } from '@angular/core';
import {faCogs} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-resolutions-page',
  templateUrl: './resolutions-page.component.html',
  styleUrls: ['./resolutions-page.component.scss']
})
export class ResolutionsPageComponent implements OnInit {

  // Font-Awesome
  faCogs = faCogs;
  
  constructor() { }

  ngOnInit(): void {
  }

}
