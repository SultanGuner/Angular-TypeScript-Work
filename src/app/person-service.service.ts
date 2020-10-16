import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PersonServiceService {
  People: PeopleModel[];
  // private _people = [];
  // get People() {
  //   return this._people;
  // }
  // set People(allPeople) {
  //   this._people = allPeople;
  // }
  GetPeople() {
    return this.People;
  }

  GetObservable() {
    return this.http.request('app/data.json')//datayı çekiyor.
    .map((response: Response) => <PeopleModel[]>response.json())//cast ediyor.
  }
  GetPromise(){
    return this.http.request('app/data.json')//datayı çekiyor.
    .map((response: Response) => <PeopleModel[]>response.json())//cast ediyor.
    .toPromise();
  }
  constructor(private http: Http) {

    // http.request('app/data.json')//datayı çekiyor.
    //   .map((response: Response) => <PeopleModel[]>response.json())//cast ediyor.

    //   .subscribe(response => this.People = response,//set edeiyor
    //     err => console.log(err),//ilgili error yazılır.
    //     () => console.log('OK'));//başarılı tamamlandıysa


    // this.People = [
    //   { name: 'Elon', surname: 'Musk' },
    //   { name: 'Bill', surname: 'Gates' },
    //   { name: 'Bob', surname: 'Marley' }
    // ]
  }
}
export class PeopleModel {
  constructor(name: string, surname: string) { }
}