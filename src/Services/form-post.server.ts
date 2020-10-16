import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import { EmployeeModel } from '../Model/EmployeeModel'//gönderilecel model
import 'rxjs/RX';

@Injectable()
export class FormPost {
  constructor(private http: Http) { }

  extractData(res: Response) {//gelen datayı jsona çevirir
    let body = res.json();
    return JSON.stringify(body.data) || {};
  }
  extractLanguage(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  handelError(error: any) {
    console.log("error" + error);
    return Observable.throw(error.statusText);//hata fırlatma
  }

  getLanguageList(): Observable<any> {
    return this.http.get("http://localhost:1453/getLanguages")
      //.delay(1000)//anguların kullandığım versiyonunda gerek kalmadığını farkettim.
      .map(this.extractLanguage)
      .catch(this.handelError);

  }
  postEmployeeForm(employee: EmployeeModel): Observable<any> {
    let body = JSON.stringify(employee);
    let header = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: header });
    return this.http.post("http://localhost:1453/processForm", body, options)
      .map(this.extractData)
      .catch(this.handelError);
  }
}