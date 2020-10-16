import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloComponent } from './hello.component';
import { WeatherComponent } from './weather.component';
import { AppComponent } from './app.component';
import { GuardDeactive } from './guard-deactive';
import { GuardActive } from './guard-active';


const appRoutes: Routes = [
  { path: 'Main', component: AppComponent, canDeactivate: [GuardDeactive], canActivate: [GuardActive] },//candeactivate çıkarken sayfadan değişikliklere izin vermesin 
  { path: 'Hello', component: HelloComponent },
  { path: 'Weather', component: WeatherComponent },
  { path: '', component: HelloComponent }//default olarak nereye gideceği
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
