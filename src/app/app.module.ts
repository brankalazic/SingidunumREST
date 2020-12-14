import { RouterModule } from '@angular/router';
import { KlijentserviceService } from './klijentservice.service';
import { CentriService } from './centri.service';

import { MyMaterial } from './material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { KlijentComponent } from './klijent/klijent.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReginComponent } from './regin/regin.component';
import { IstorijaComponent } from './istorija/istorija.component';
import { LogInNavComponent } from './log-in-nav/log-in-nav.component';
import { MatIconModule } from '@angular/material/icon';
import { SearchComponent } from './search/search.component';

import { AgmCoreModule } from '@agm/core';
import { WelcomeComponent } from './welcome/welcome.component';

  
/* import firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from '../environments/environment'; */

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    KlijentComponent,
    LoginComponent,
    ReginComponent,
    IstorijaComponent,
    LogInNavComponent,
    SearchComponent,
    WelcomeComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterial,
    RouterModule,
    ReactiveFormsModule,
    MatIconModule,
    AgmCoreModule.forRoot({
      apiKey:"AIzaSyAIHSmukKD8vEqIJw2dJrVoXpdHh9u_5vM"
    })
  ],
  
  
  providers: [CentriService, KlijentserviceService],
  bootstrap: [AppComponent],
 
})
export class AppModule { 
  registrovan:boolean=false;
}
