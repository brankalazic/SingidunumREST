import { KlijentserviceService } from './../klijentservice.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../app.component.css']
})
export class LoginComponent implements OnInit {
  podatak;
  loginForm: FormGroup;
  submitted = false;
  success = false;
 
  Klijent:KlijentserviceService;
  
  constructor(private formBuilder: FormBuilder, Klijent:KlijentserviceService, private router:Router) { 
  this.Klijent=Klijent;
  
  if(Klijent.username!=null){
    router.navigate(["/klijent"])
  }
  this.podatak="LogIn";
  }

  ngOnInit() {
    
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
        return;
    }

   
    
    var username=this.loginForm.controls['username'].value;
    var password=this.loginForm.controls['password'].value;
   let podatak= this.Klijent.klijentLogIn(username,password);
   if(podatak){
     console.log("Uspeh");
     this.Klijent.username=username;
     this.Klijent.setIsLogIn(true);
   
     this.router.navigate(['/klijent']);
     return
   }
   else{
    let error=document.querySelector("#Error");
    error.innerHTML="Ne postoji korisnik";
    
    
   }
   
}

}
