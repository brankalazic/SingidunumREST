import { KlijentserviceService } from './klijentservice.service';
import { CentriService } from './centri.service';
import { Component, Output, ɵɵNgOnChangesFeature, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   
  
})
export class AppComponent implements OnChanges{
  Centri:CentriService;
  router:Router;
  Klijent:KlijentserviceService;
  isLog:boolean;
 constructor(centri:CentriService, router:Router, Klijent:KlijentserviceService){
   this.Centri=centri;
   this.router=router;
   this.isLog=Klijent.getIsLogIn();
 }

 
 
 ngOnChanges(){
   
   
   
 }
  podatak:String="Naše ponude";
  
}

