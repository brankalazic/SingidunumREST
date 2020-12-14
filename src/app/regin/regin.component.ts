import { KlijentserviceService } from './../klijentservice.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray, FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regin',
  templateUrl: './regin.component.html',
  styleUrls: ['./regin.component.css','../app.component.css']
})
export class ReginComponent implements OnInit {
  podatak="Registracija";
  klijent:KlijentserviceService;
  registerForm: FormGroup;
  submitted = false;
  success = false;
  checked = false;
  proveraNiza=false;
  mesta1=[];
  mesta = [{ mesta: 'Bazen' }, { mesta: 'Bioskop' }, { mesta: 'Restoran' }, { mesta: 'Koncert' }]
  constructor(private formBuilder: FormBuilder, klijent:KlijentserviceService, private router:Router) {
    this.klijent=klijent;
   }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      
      ime: ['', Validators.required],
      prezime: ['', Validators.required],
      email: ['', Validators.required],
      telefon: ['', Validators.required],
      adresa: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onChange(mesta:String, isChecked: boolean) {
    //const mestaFormArray = <FormArray>this.registerForm.controls.mesta;
    
  
    if(isChecked) {
      
      if(this.mesta1.some(x=>{
        return x.toString()==mesta;
      })){
      let index=this.mesta1.findIndex(x=>x.toString()===mesta);
      this.mesta1.splice(index, 1);
        
      }
      else{
        this.mesta1.push(mesta);
      }
      

      
      
    
    console.log(this.mesta1);
  }
  if(this.mesta1.length==0){
    this.proveraNiza=true;
    console.log(this.proveraNiza);


  }else{
    this.proveraNiza=false;
  }
}

  onSubmit() {
    if(this.mesta1.length==0){
      this.proveraNiza=true;
      console.log(this.proveraNiza);
      return;
    }
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }

    this.success = true;
    if(this.success){
      var ime=this.registerForm.controls['ime'].value;
      var prezime=this.registerForm.controls['prezime'].value;
      var email=this.registerForm.controls['email'].value;
      var telefon=this.registerForm.controls['telefon'].value;
      var adresa=this.registerForm.controls['adresa'].value;
   
      var username=this.registerForm.controls['username'].value;
      var password=this.registerForm.controls['password'].value;
  
      
      
      let provera=this.klijent.pushNewKlijentInArrayKlijenti(ime,prezime,email,telefon,adresa,this.mesta1,username,password);
      if(provera){
          this.router.navigate(["/klijent"])
      }
      else{
        document.getElementById("postoji").innerHTML="Korisnik postoji";
      }
    }
}


}


