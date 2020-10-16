import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PersonListComponent } from './person-list.component';
import { PersonServiceService } from './person-service.service';
import { CapitalLetterPipe } from './capital-letter.pipe';
import { HelloComponent } from './hello.component';
import { WeatherComponent } from './weather.component';
import { routing } from './app-routing.module';
import { MenuComponent } from './menu.component';
import { GuardDeactive } from './guard-deactive';
import { GuardActive } from './guard-active';
import { GuardServiceService } from './guard-service.service'
import { DatepickerModule } from 'ng2-bootstrap/datepicker';
import { RatingModule } from 'ng2-bootstrap/rating';
import { FormPost } from '../Services/form-post.server';
@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    CapitalLetterPipe,
    HelloComponent,
    WeatherComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    DatepickerModule.forRoot(),
    RatingModule.forRoot()
  ],
  providers: [PersonServiceService, GuardDeactive, GuardServiceService, GuardActive, FormPost],
  bootstrap: [MenuComponent]
})
export class AppModule { }
