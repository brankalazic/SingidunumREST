import { KlijentserviceService } from './../klijentservice.service';
import { Component, OnInit, Input, OnChanges, Output } from '@angular/core';
import { CentriService } from '../centri.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.css','./home.component.css']
  
  
})
export class HomeComponent implements OnInit,OnChanges {
  
relaksacija;
ServisCentri:CentriService;
isLogIn:boolean;
podatak:String;

  constructor(Centar:CentriService, Klijent:KlijentserviceService, private router:Router) {
    this.relaksacija=Centar.centriZeljeni;
    this.ServisCentri=Centar;
    this.isLogIn=Klijent.getIsLogIn();
    this.podatak="Naše ponude";

   }
   
  ngOnInit() {
    this.relaksacija=this.ServisCentri.centriZeljeni;
    
  }
  
  ngOnChanges(){

     this.relaksacija=this.ServisCentri.centriZeljeni;
    
  }
  
  changeName(podatak:String){
    if(podatak=="/"){
      this.ServisCentri.centriZeljeni=this.ServisCentri.centriZaRelaksaciju;
      this.podatak="Naše ponude";
      this.relaksacija=this.ServisCentri.centriZeljeni;
      return
    }
    this.ServisCentri.changeCentriZeljeniToAnAdequateParamater(podatak)
    this.relaksacija=this.ServisCentri.centriZeljeni;
    this.podatak="Naše ponude-"+podatak;
 }

}
