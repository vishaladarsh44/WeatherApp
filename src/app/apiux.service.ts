import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiuxService {

  constructor( private http:HttpClient) { }

  getweather(location: any){
    return this.http.get(
      "http://api.weatherstack.com/current?access_key=134c3cb9e480d0aec47316082d816b57&query="+location
    );
  }
}
