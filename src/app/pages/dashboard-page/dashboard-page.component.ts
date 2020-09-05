import { Component, OnInit } from '@angular/core';
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import { ApiHelperService } from 'src/app/services/api-helper.service';

export interface PatientRequest {
  num: any;
  date: any;
  desc: any;

}
const ELEMENT_DATA: PatientRequest[] = [
  {num: 1, date: 1, desc: 1},
  {num: 1, date: 1, desc: 1},
  {num: 1, date: 1, desc: 1},
  {num: 1, date: 1, desc: 1},
  {num: 1, date: 1, desc: 1}
];
@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  faPlus = faPlus
  displayedColumns: string[] = ['num', 'date', 'desc'];
  dataSource = ELEMENT_DATA;
  constructor(private apiHelper: ApiHelperService) { }

  ngOnInit(): void {
  }

}
