import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegulationsService {

  constructor(private http:HttpClient) { }
  getbytag(){
    let url="https://mrp-function-app-1.azurewebsites.net/api/DocumentwiseSourceDetails";
    return this.http.get(url);
  }
}
