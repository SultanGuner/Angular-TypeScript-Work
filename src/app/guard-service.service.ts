import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Login } from './Login'

@Injectable()
export class GuardServiceService {

  isLogin(): Observable<Login[]> {
    return this.http.request('./app/login.json?v=1.00')
      .map((response: Response) => <Login[]>response.json())
  }
  constructor(private http: Http) { }
}
