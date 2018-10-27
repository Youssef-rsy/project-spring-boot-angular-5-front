import { Permanent } from '../interface/permanent';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PermanentServiceService {
permanent:Permanent = {id: null, 
       nom: '',
       prenom:'',
        adresse: {id: null , rue: '', ville: ''},
        servcie:'',
        cours:null,
        garde:''};
  constructor(private http:HttpClient) { }

  getall(){
    return  this.http.get('http://localhost:8080/permanents');
  }
  addpermanent(pr:Permanent){
     this.permanent = {id: null, 
       nom: pr.nom,
       prenom:pr.prenom,
        adresse: {id: null , rue: pr.adresse.rue, ville: pr.adresse.ville},
        servcie:pr.servcie,
        cours:null,
        garde:pr.garde};
    console.log(this.permanent);
     console.log('-----------------------------');
    //console.log(frompermanent.value);
    console.log(this.permanent.nom);
      console.log( this.permanent.prenom);
     console.log( this.permanent.adresse.rue);
     console.log( this.permanent.adresse.ville);
     console.log( this.permanent.garde);
     console.log( this.permanent.servcie);
     console.log('-----------------------------');
    
    return this.http.post('http://localhost:8080/addpermanent' ,this. permanent);
  }
  
  deletepermanent(id:number){
    return this.http.delete('http://localhost:8080/deletepermanent?permanentid='+id);
  }
  
  update(id:number){
    return this.http.get('http://localhost:8080/updatepermanent?permanentid='+id);
  }
  
  modifierinfos(pr:Permanent){
      return this.http.put('http://localhost:8080/updateinfospermanent',pr);
  }
  affichercours(id:number){
     return this.http.get('http://localhost:8080/affichercourspermanent?permanentid='+id);
  }
  
 
  listOfNonAssignedCours(){
     return this.http.get('http://localhost:8080/listOfNonAssignedCours');
  }
  
  courapermanent(idpermanent:number , idcour:number){
    return this.http.get('http://localhost:8080/courapermanent?idpermanent='+idpermanent+'&cour='+idcour);
  }
  
  deletecourspermanent(idpermanent:number , idcour:number){
    return this.http.get('http://localhost:8080/delcourapermanent?idpermanent='+idpermanent+'&idc='+idcour);
  }
/*
  
  
  associate(permanent:Permanent){
    
  }
  deletecourspermanent(idpermanent , idcour){
    //utilise idpermanent
    
  }
  
  updatepermanent(permanent:Permanent){
    
  }
  */
  
}
