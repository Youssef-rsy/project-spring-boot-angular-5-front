import { Adresse } from '../interface/adresse';
import { Cours } from './cours';
export interface Permanent {
    id?:number  ;
    nom?:string  ;
    prenom?:string  ;
    adresse?:Adresse;
    cours:Cours[];
    servcie?:string;
    garde?:string ;
  
}