import { Adresse } from './adresse';
import { Cours } from './cours';
export interface Vacataire {
      id?:number  ;
    nom?:string  ;
    prenom?:string  ;
    adresse?:Adresse;
    cours:Cours[];
    servcie?:string;
    employeur?:string ;
  
}