import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styles: [`
    input:focus{
      font-weight:bold;
      color:red;
      outline:none;
    }
    .mouseDown{
      border: 2px solid green;
    }
  `]
})
export class PersonListComponent implements OnInit {
  @Input('personData') personData;
  @Output('ShowName') ShowName = new EventEmitter();
  strName: string;
  strSurName: string;
  constructor() {
    //this.strName = "Sultan";
    //this.strSurName = "GÜNER";
  }
  public WriteFullName() {
    //console.log(`Tam Ad ${this.strName} ${this.strSurName}`);
    //alert(`Tam Ad ${this.strName} ${this.strSurName}`);
    this.ShowName.next(this.personData);
    //alert("sultan");
  }
  public OnlyNumbers($event) {
    //console.log($event)
    if ($event.charCode >= 49 && $event.charCode <= 57) {
      return false;
    }
  }

  ngOnInit() {
    this.strName = this.personData.name;
    this.strSurName = this.personData.surname;
  }

}
