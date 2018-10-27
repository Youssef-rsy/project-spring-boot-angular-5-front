import { Vacataire } from '../interface/vacataire';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class VacataireServiceService {

  constructor(private http:HttpClient) { }
 getall(){
    return  this.http.get('http://localhost:8080/vacataires');
  }
  addvacataire(vacataire:Vacataire){
    
    return this.http.post('http://localhost:8080/addvacataire',vacataire);
  }
  
  deletevacataire(id:number){
    return this.http.delete('http://localhost:8080/deletevacataire?vacataireid='+id);
  }
  
  update(id:number){
    return this.http.get('http://localhost:8080/updatevacataire?vacataireid='+id);
  }
  
  modifierinfos(pr:Vacataire){
      return this.http.put('http://localhost:8080/updateinfosvacataire',pr);
  }
  affichercours(id:number){
     return this.http.get('http://localhost:8080/affichercoursvacataire?vacataireid='+id);
  }
  
 
  listOfNonAssignedCours(){
     return this.http.get('http://localhost:8080/listOfNonAssignedCours');
  }
  
  couravacataire(idvacataire:number , idcour:number){
    return this.http.get('http://localhost:8080/couravacataire?idvacataire='+idvacataire+'&cour='+idcour);
  }
  
  deletecoursvacataire(idvacataire:number , idcour:number){
    return this.http.get('http://localhost:8080/delcouravacataire?idvacataire='+idvacataire+'&idc='+idcour);
  }
}
