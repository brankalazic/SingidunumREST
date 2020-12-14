import { WelcomeComponent } from './welcome/welcome.component';
import { SearchComponent } from './search/search.component';
import { KlijentComponent } from './klijent/klijent.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReginComponent } from './regin/regin.component';
import { IstorijaComponent } from './istorija/istorija.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'klijent',component:KlijentComponent},
  {path:'LogIn',component:LoginComponent},
  {path:'RegIn',component:ReginComponent},
  {path:'istorija',component:IstorijaComponent},
  {path:'Search',component:SearchComponent},
  {path:'Welcome',component:WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
