import { Adresse } from './adresse';
export interface Etudiant {
  id:number  ;
  nom?:string  ;
   prenom?:string  ;
  adresse?:Adresse  ;
   specialite?:string ;
}