import { Injectable } from '@angular/core';
import {HttpModule, Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http' ;
import 'rxjs/add/operator/map';


@Injectable()
export class CoursServiceService {

  constructor(private http: HttpClient) { }

  save(url) {
    return this.http.get(url);
  }

  getAll(url) {
    console.log("-------------->");
    return this.http.get(url);
  }

  getOne(url) {
    return this.http.get(url);
  }

  update(url) {
    return this.http.get(url);
  }

  delete(url) {
    return this.http.get(url);
  }

}
