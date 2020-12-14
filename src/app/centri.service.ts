import { HomeComponent } from './home/home.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CentriService {
  
 
  centriZaRelaksaciju = [	
    {
      ime:"Bazen",
      lokacija:"Kosutnjak",
      popust:20,
      slika:"https://lh3.googleusercontent.com/proxy/9OBlqdNt3KHS1HCounMJ5cIvDs1rQRcA0u6VCEtEIoG1qW2u3yIwER_f1M3kw86GKrU7AiGTj_zuiS37ctS6F3UwCW1pNhY9swM",
      cena:400 + " " + "RSD"
    },
    {
      ime:"Bazen",
      lokacija:"Bazen Tašmajdan",
      popust:20,
      slika:"https://www.alo.rs/resources/images/0000/287/696/110341711_605437150118388_6206854308324329412_n_900x900.jpg",
      cena:300 + " " + "RSD"
    },
    {
      ime:"Bazen",
      lokacija:"Bazeni Banjica",
      popust:20,
      slika:"https://www.knjazevac.rs/images/2019/07/06/bazen-banjica.jpg",
      cena:300 + " " + "RSD"
    },
    {
      ime:"Bazen",
      lokacija:"SC Novi Beograd, SRC 11 April",
      popust:10,
      slika:"https://ocdn.eu/pulscms-transforms/1/aCAk9lMaHR0cDovL29jZG4uZXUvaW1hZ2VzL3B1bHNjbXMvWm1VN01EQV8vN2MwZmEzOWY4ZTIxNWIxNmVmNTVlMTE3MzY5MWFiZDMuanBlZ5GTAs0C5ACBAAE",
      cena:500 + " " + "RSD"
    },
    {
      ime:"Ekskurzija",
      lokacija:"Prag",
      popust:15,
      cena:300 + " " + "EUR",
      slika:"https://cdn.sweetescape.com/images/cities/prague/cover/70501bb6-382f-490b-b696-c3d66a2b739b-1080.jpg"
    },
    {
      ime:"Ekskurzija",
      lokacija:"Barselona",
      cena:400 + " " + "EUR",
      popust:10,
      slika:"https://www.suspanish.com/blog/wp-content/uploads/2018/11/City-trip-Barcelona-.jpg"
    },
    {
      ime:"Ekskurzija",
      lokacija:"Milano",
      cena:300 + " " + "EUR",
      popust:20,
      slika:"https://www.prizmatravel.com/img.php?i=galerije/metropole/milano/milano-italija-1.jpg&h=600"
    },
    {
      ime:"Ekskurzija",
      lokacija:"Budimpešta",
      cena:150 + " " + "EUR",
      popust:20,
      slika:"https://www.mamaison.com/data/destinations/df/750x640.exact.q85/budapest-lg.jpg?_images_storage"
    },
    {
      ime:"Ekskurzija",
      lokacija:"Amsterdam",
      cena:350 + " " + "EUR",
      popust:20,
      slika:"https://playtravel.rs/wp-content/uploads/Hoteli-Amsterdam-4-1-922x576.jpg"
    },
    
    {
      ime:"Bazen",
      lokacija:"Olimp",
      popust:50,
      cena:350 + " " + "RSD",
      slika:"https://www.besplatansport.com/media/com_mtree/images/listings/m/4105.jpg"
    },
    {
      ime:"Bioskop",
      lokacija:"TuckWood",
      popust:20,
      cena:700 + " " + "RSD",
      slika:"https://www.android.rs/lopare/res/slike/2174.jpg"
    },
    {
      ime:"Bioskop",
      lokacija:"Usce",
      popust:40,
      cena:1000 + " " + "RSD",
      slika:"https://www.cineplexx.rs/GenticsImageStore/628/353/force//media/rs/novosti/vesti/clanci/BeFunky_Puna_sala_bioskopa_Cineplexx.jpg"
    },
    {
      ime:"Bioskop",
      lokacija:"Delta city",
      popust:40,
      cena:1000 + " " + "RSD",
      slika:"https://s3.eu-central-1.amazonaws.com/apartmani-u-beogradu/uploads/firms/357/sr/main/cineplexx-delta-city-bioskopi-beograd-novi-beograd.jpg"
    },
    {
      ime:"Bioskop",
      lokacija:"Cinema",
      popust:60,
      cena:1000 + " " + "RSD",
      slika:"https://www.studentskizivot.com/wp-content/uploads/2014/07/CINEMA.jpg"
    },
    {
      ime:"Bioskop",
      lokacija:"Fontana",
      popust:40,
      cena:800 + " " + "RSD",
      slika:"http://www.novosti.rs/upload/images/2015//01/23/bioskop-fontana%20.jpg"
    },
    {
      ime:"Bioskop",
      lokacija:"New Theatre Zvezda",
      popust:20,
      cena:1000 + " " + "RSD",
      slika:"https://i0.wp.com/belgradespots.com/wp-content/uploads/job-manager-uploads/main_image/2018/03/bioskop-zvezda-okupacija.jpg?fit=550%2C413"
    },
    {
      ime:"Restoran",
      lokacija:"Franš",
      popust:20,
      cena:800 + " " + "RSD" + " " + "(Rezervacija stola)",
      slika:"https://www.restoranibeograd.com/storage/restaurant/interior/64/restoran_frans_25.jpg"
    },
    {
      ime:"Restoran",
      lokacija:"Voulez Vous",
      popust:20,
      cena:450 + " " + "RSD" + " " + "(Rezervacija stola)",
      slika:"https://www.beep.rs/wp-content/uploads/2019/04/IMG_1293-500x375.jpg"
    },
    {
      ime:"Restoran",
      lokacija:"Intergalactic",
      popust:20,
      cena:400 + " " + "RSD" + " " + "(Rezervacija stola)",
      slika:"https://www.u-beogradu.com/uploads/2014/11/intergalactic-diner-5.jpg"
    },
    {
      ime:"Restoran",
      lokacija:"Boutique",
      popust:30,
      cena:500 + " " + "RSD" + " " + "(Rezervacija stola)",
      slika:"https://www.kudanaklopu.com/test_knk/wp-content/uploads/2015/09/0-beograd-restoran-boutique-1000x750_c.jpg"
    },
    {
      ime:"Restoran",
      lokacija:"Soba 207",
      popust:20,
      cena:300 + " " + "RSD" + " " + "(Rezervacija stola)",
      slika:"https://www.gdecemo.rs/images/company/large/IMG_9241-HDR-UHqj.jpg"
    }
  
    ];
     centriZeljeni;
  constructor() {
    this.centriZeljeni=this.centriZaRelaksaciju;
   }
   changeCentriZeljeniToAnAdequateParamater(ime1:String){
     if(ime1==""){
       return this.centriZaRelaksaciju;
     }
     this.centriZeljeni=this.centriZaRelaksaciju.filter(function(centar){
        return centar.ime==ime1;
     })
   }

   
}
