
import { Permanent } from './permanent';
import { Vacataire } from './vacataire';
export class Cours {
  //Long id, String nom, Enseignant enseignant, List<Etudiant> etudiants
  constructor(private _id?:number ,private _nom?:string ,private _permanent?:Permanent , private _vacataire?:Vacataire  ){
  }
  get id(){
    return this.id;
  }
  
  get nom(){
    return this.nom;
  }
  
  get permanent(){
    return this.permanent;
  }
  
  get vacataire(){
    return this.vacataire;
  }
   set id(id){
    this.id =id ;
  }
  
  set nom(nom){
     this.nom =  nom;
  }
  
  set permanent(permanent){
    this.permanent=permanent;
  }
  
  set vacataire(vacataire){
    this.vacataire =  vacataire;
  }
  
}