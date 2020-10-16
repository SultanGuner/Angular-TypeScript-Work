import { Component, OnInit } from '@angular/core';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import { PeopleModel, PersonServiceService } from './person-service.service';
import { Observable } from 'rxjs/Observable'// angular kütüphanesi değilse 
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
   <app-person-list *ngFor = 'let person of this.PeoplePromise | async' [personData] = "person" (ShowName) ='SayMyName($event)'></app-person-list>
   <br><br><br>
   <span *ngIf = "this.PeopleList.length > 0 " > Eklenen Toplam Kişi : {{this.PeopleList.length}} 
   <input type = "button" value="Temizle" (click) = "ClearList()">
    <ul>
    <li *ngFor = 'let person of this.PeopleList'>
      <span [ngClass]= "person.state" > {{person.name}} {{person.surname}} </span>
    </li>
    </ul>
   </span>
  `,
  styles: [`
  .completed{
    text-decoration:line-through;
  } `
  ],
  //styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  people = [];
  PeopleObservable: Observable<PeopleModel[]>;//cast işlemi
  PeoplePromise: Promise<PeopleModel[]>;

  GetObservableData() {
    this.PeopleObservable = this.personService.GetObservable();
  }
  GetPromiseData() {
    this.PeoplePromise = this.personService.GetPromise();

  }
  constructor(private personService: PersonServiceService) {// ilgili servise ulaşmak için private olarak belirtilir.
    //this.people = personService.People;
  }
  PeopleList = [];
  hasChange: Boolean = false;
  public SayMyName($event) {

    this.hasChange = true;

    var people = { name: $event.name, surname: $event.surname, state: 'completed' }//yeni alan eklenir
    if (!this.PeopleList.find(res => res.name == people.name))//listede aynı isim varsa eklenmesin.
    {
      this.PeopleList.push(people);//listeye eklenir.
      //console.log(this.PeopleList.length);
    }
    //console.log(`Say My Name:${$event.name} SurName:${$event.surname}`);
  }
  public ClearList() {
    this.PeopleList = [];
  }

  ngOnInit() {
    this.GetObservableData();
    this.GetPromiseData();
  }
  //onbtnClk(e:any):void
  //{
  // alert("sultan");
  //}
}
