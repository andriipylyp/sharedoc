import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiHelperService {
  constructor(private http: HttpClient) { }
  private url = ''
  public getDashboard(){
    return this.http.get(this.url+'/dashboard').subscribe(data => {return data})
  }
}
