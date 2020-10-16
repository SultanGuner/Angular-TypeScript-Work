import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  title:string = "Eğitim";
  constructor() { }

  ngOnInit() {
  }

}
