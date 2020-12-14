import { CentriService } from './../centri.service';
import { Router } from '@angular/router';
import { KlijentserviceService } from './../klijentservice.service';
import { Component, OnInit, Output, OnChanges } from '@angular/core';
export interface ServiceInterface{
  ime:String,
  lokacija:String,
  popust:String,
  cena:number,
  slika:String,
  
}


@Component({
  selector: 'app-klijent',
  templateUrl: './klijent.component.html',
  styleUrls: ['./klijent.component.css','../app.component.css']
})
export class KlijentComponent implements OnInit, OnChanges {
  KlijentKlasa:KlijentserviceService;
  Klijent;
  vrednostLogIn;
  relaksacija:[ServiceInterface];
  isLogIn;
  podatak;
  
  
  constructor(klijent:KlijentserviceService, private router:Router, private service:CentriService) {
    this.KlijentKlasa=klijent;
    this.Klijent=this.KlijentKlasa.getKlijent();
    this.vrednostLogIn=this.KlijentKlasa.getIsLogIn();
    this.checkCredentials();
    this.isLogIn=this.KlijentKlasa.getIsLogIn();
    this.Klijent.mesta.map(mesta=>{
      if(this.relaksacija===undefined){
        this.service.changeCentriZeljeniToAnAdequateParamater(mesta);
        this.relaksacija=this.service.centriZeljeni;
      }else{
        this.service.changeCentriZeljeniToAnAdequateParamater(mesta);
        //console.log(this.service.centriZeljeni);
        this.relaksacija=this.service.centriZeljeni.concat(this.relaksacija);

      }
      
    })
    this.Klijent.istorija.map(mesto=>{
      let index=this.relaksacija.findIndex(x=>x.lokacija===mesto);
      this.relaksacija.splice(index, 1);
        

    })
      this.podatak=this.Klijent.ime+" "+this.Klijent.prezime;
    

   }
   

  ngOnInit() {
   
  }
  
  
  private checkCredentials(){
    if(!this.KlijentKlasa.getIsLogIn()){
      this.router.navigate(["/"]);
    }
    //this.podatak.emit("true");

  }
  ngOnChanges(){

  }
  reserve(element){
    this.Klijent.istorija.push(element);
    console.log(this.Klijent);
    let index=this.relaksacija.findIndex(x=>x.lokacija===element);
    this.relaksacija.splice(index, 1);
  }

}
