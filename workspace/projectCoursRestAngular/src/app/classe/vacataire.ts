import { Adresse } from './adresse';
export class Vacataire {
  constructor(private _id?:number, private _nom?:string, private _prenom?:string, private _adresse?:Adresse, private _employeur?:string){
    
  }
}