import { Component, OnInit } from '@angular/core';
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import { ApiHelperService } from 'src/app/services/api-helper.service';

export interface PatientRequest {
  num: any;
  date: any;
  desc: any;

}

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  faPlus = faPlus
  dataSource: any
  pageCount: number
  currentPage = 1
  displayedColumns: string[] = ['num', 'date', 'desc'];
  constructor(private apiHelper: ApiHelperService) { }
  func(i){
    this.currentPage = i+1
    
  }
  ngOnInit(): void {
    const ELEMENT_DATA: PatientRequest[] = [
      {num: 1, date: 1, desc: 1},
      {num: 1, date: 1, desc: 1},
      {num: 1, date: 1, desc: 1},
      {num: 1, date: 1, desc: 1},
      {num: 1, date: 1, desc: 1},
      {num: 1, date: 1, desc: 1},
      {num: 1, date: 1, desc: 1},
    
    ];
    this.dataSource = []
    var rawData = ELEMENT_DATA
    this.pageCount = Math.ceil(ELEMENT_DATA.length / 5)
    this.currentPage = this.pageCount
    if(this.pageCount == 0){
      this.pageCount = 1
    }
    for(var i = 0; i < this.pageCount; i++){
      var newerData = []
      for(var i2 = 0; i2 < 5; i2++){
        if(rawData[0]){
          newerData.push(rawData[0])
          rawData.shift()
        }
        
      }
      this.dataSource.push(newerData)
    }
    console.log(this.pageCount)
  }

}
