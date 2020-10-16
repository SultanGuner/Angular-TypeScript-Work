import { Component, OnInit } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'app-weather',
  template: ` <h1> Hava Durum </h1>
        Bugün hava "-2" derece.
  `,
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
