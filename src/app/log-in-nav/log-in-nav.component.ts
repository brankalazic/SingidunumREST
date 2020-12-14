import { Klijent, KlijentserviceService } from './../klijentservice.service';
import { Component, OnInit, Input } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in-nav',
  templateUrl: './log-in-nav.component.html',
  styleUrls: ['../nav/nav.component.css']
})
export class LogInNavComponent implements OnInit {
  @Input('data') podatak:String;
  constructor(private Klijent:KlijentserviceService, private router:Router) { }

  ngOnInit() {
  }
  LogOut(){
    this.Klijent.username=null;
    this.Klijent.setIsLogIn(false);
    this.router.navigate(["/"]);
  }

}
