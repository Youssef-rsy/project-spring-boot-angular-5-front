import { Adresse } from './adresse';
export class Permanent {
  
  constructor(private _id?:number, private _nom?:string, private _prenom?:string, private _adresse?:Adresse,private _service?:string , private _grade?:string){
  }
  
  get grade(){
    return this.grade;
  }
 get service(){
    return this.service;
  }
 
}