import { Cours } from '../classe/cours';
import { Etudiant } from '../interface/etudiant';
import { Injectable } from '@angular/core';
import {HttpModule, Response} from '@angular/http';
import { Http } from '@angular/http' ;
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceEtudiantService{

  private url:string;
  
constructor(private http: Http) { }
   save(etudiant:Etudiant){
    return this.http.post('http://localhost:8080/addetudiant',etudiant).map( (response: Response)  =>  response.json());
  }
  
  getall(){
    return this.http.get('http://localhost:8080/etudiants').map( (response: Response)  =>  response.json());
  }
  
  getAllCours(){
    return this.http.get('http://localhost:8080/listOfNonAssignedCours').map( (response: Response)  =>  response.json());

  }
   deletec(etudiantid:number){
    this.url ='http://localhost:8080/deleteetudiant?etudiantid='+etudiantid ;
    console.log(this.url);
    return this.http.delete(this.url).map( (response: Response)  =>  response.json());
  }
  getOne(etudiantid:number){
     return this.http.get('http://localhost:8080/updateEtudiant?etudiantid='+etudiantid).map( (response: Response)  =>  response.json());
  }

  update(etudiant:Etudiant){
    return this.http.put('http://localhost:8080/updateinfosetudiant',etudiant  );
  }

  coursLlist(etudiantid:number){
      return this.http.get('http://localhost:8080/affichercoursetudiant?etudiantid='+etudiantid).map( (response: Response)  =>  response.json());
  }
  
  
  updatestudent(etudiantid:number , cours:number){
       return this.http.get('http://localhost:8080/couraetud?idetu='+etudiantid+'&cour='+cours).map( (response: Response)  =>  response.json());

  }
}

