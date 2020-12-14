import { CentriService } from './../centri.service';
import { Klijent, KlijentserviceService } from './../klijentservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-istorija',
  templateUrl: './istorija.component.html',
  styleUrls: ['../home/home.component.css','../app.component.css', './istorija.component.css']
})
export class IstorijaComponent implements OnInit {
relaksacija;
isLogIn;
podatak;
  constructor(private Klijent:KlijentserviceService, private ServiceMesta:CentriService) {
   console.log(this.Klijent.getKlijent())
    this.isLogIn=this.Klijent.getIsLogIn();
    this.Klijent.getKlijent().istorija.map(mesta=>{
      console.log("istorija "+mesta)
      if(this.relaksacija==undefined){
        this.relaksacija=this.ServiceMesta.centriZaRelaksaciju.filter(centar=>{
          return centar.lokacija==mesta;
          
        });
      }
      else{
        this.relaksacija=this.relaksacija.concat(this.ServiceMesta.centriZaRelaksaciju.filter(centar=>{
         
          return centar.lokacija==mesta;
        })
            )

      }
  
        
  
  })
  
this.podatak=Klijent.getKlijent().ime+" "+Klijent.getKlijent().prezime;
   }

  ngOnInit() {
    

}

}