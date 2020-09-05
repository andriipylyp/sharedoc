import { Component, OnInit } from '@angular/core';
import {faPlus} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-submit-issue',
  templateUrl: './submit-issue.component.html',
  styleUrls: ['./submit-issue.component.scss']
})
export class SubmitIssueComponent implements OnInit {
  faPlus = faPlus
  constructor() { }

  ngOnInit(): void {
  }

}
