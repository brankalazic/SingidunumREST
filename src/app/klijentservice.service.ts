import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
export interface Klijent{
  ime:String,
  prezime:String,
  email:String,
  phone:number,
  adresa:String,
  mesta,
  username:String,
  password:String,
  istorija:[]
}
@Injectable({
  providedIn: 'root'
})

export class KlijentserviceService {
  private isLogIn:boolean;
  constructor() { 
    this.isLogIn=false;
  }


  
  username:String;
  
  
  
  Klijenti:Array<Klijent>=[   
    {
      ime:"Branka",
      prezime:"Lazic",
      email:"brankala28@gmail.com",
      phone:+381605617010,
      adresa:"Pariske komune 90",
      mesta:["Bazen","Bioskop"],
      username:"branka023",
      password:"branka",
      istorija:[]
    }];
 
  setIsLogIn(podatak:boolean){
  this.isLogIn=podatak;
  }
  getIsLogIn(){
    return this.isLogIn;
    }
  
  pushNewKlijentInArrayKlijenti(ime:String, prezime:String, email:String, phone:number, adresa:String, mesta, username:String, password:String){
  let provera:boolean=this.Klijenti.some(function (klijent1){
    
    return klijent1.username===username;
    
 });
 
  if(!provera){
   let istorija=[];
   let klijentNovi=this.createKlijent(ime, prezime,email,phone,adresa,mesta,username, password, istorija);
  this.Klijenti.push(klijentNovi);
  console.log(this.Klijenti)
  this.isLogIn=true;
  this.username=klijentNovi.username;
  return true;
}console.log("Postoji");
return false;

}
  getKlijent():Klijent{

    return this.Klijenti.find(klijent=>{
      return klijent.username==this.username;
    })
    
  }
  klijentLogIn(username:String, password:String):boolean{
    console.log(username);
    console.log(password);
    let podatak=this.Klijenti.some(klijent1=>{
      return klijent1.username==username&&klijent1.password==password;
    })
    if(podatak){
      this.isLogIn=true;
    }
    return podatak;
    
  }
  
  createKlijent(ime, prezime, email, phone,adresa,mesta,username, password, istorija):Klijent{
    return{
      ime:ime,
      prezime:prezime,
      email:email,
      phone:phone,
      adresa:adresa,
      mesta:mesta,
      username:username,
      password:password,
      istorija:istorija
    }
  }
  
}
