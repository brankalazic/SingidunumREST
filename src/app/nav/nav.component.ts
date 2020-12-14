import { browser } from 'protractor';
import { KlijentserviceService } from './../klijentservice.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css', '../app.component.css']
})
export class NavComponent implements OnInit, OnChanges {
  @Input('data') podatak:String;
  Klijent:KlijentserviceService;
  vrednost;
  
  
  navigacija:String;
  constructor(Klijent:KlijentserviceService, private router:Router) {
    this.Klijent=Klijent;
    
  }
  
  
  ngOnInit() {
   
  }
  
  
  ngOnChanges() {
    this.vrednost=this.Klijent.getIsLogIn();
  }
  
  setVrednost(podatak:boolean){
    this.vrednost=podatak;
  }
  
  
}
