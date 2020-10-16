import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { GuardServiceService } from './guard-service.service';
import { Login } from './Login'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GuardActive implements CanActivate {


    resultList: Observable<Login[]>; //servisten dönen
    result: Promise<boolean> | boolean;  //kişiye göre filter 

    canActivate() {
        this.resultList = this.service.isLogin();
        this.result = this.resultList
            .toPromise()//servisten dönen sonucu bekliyor
            .then(data => data.filter(fill => fill.name == 'taylor davis')[0].login)
        this.result.then(function (resultBoolean) {
            if (resultBoolean == false) {
                alert("Lütfen giriş yapınız!!");
            }
            // else
            // {
            //     alert("Giriş Yapılmıştır.")
            // }
        })
        return this.result;
    }
    constructor(private service: GuardServiceService) { }
}
