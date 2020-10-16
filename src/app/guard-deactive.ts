import { CanDeactivate } from '@angular/router';
import { AppComponent } from './app.component';
//import { HelloComponent } from './hello.component';

export class GuardDeactive implements CanDeactivate<AppComponent> {

  canDeactivate(target: AppComponent) {
    if (target.hasChange) {
      return window.confirm("Bir değişiklik yaptınız ayrılmak istediğinize emin misiniz?");
    }
    return true;
  }
}
