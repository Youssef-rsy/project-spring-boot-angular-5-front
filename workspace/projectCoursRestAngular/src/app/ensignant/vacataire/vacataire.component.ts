import { Vacataire } from '../../interface/vacataire';
import { VacataireServiceService } from '../../service/vacataire-service.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-vacataire',
  templateUrl: './vacataire.component.html',
  styleUrls: ['./vacataire.component.css']
})
export class VacataireComponent implements OnInit {

   lstvacataire;//pour affichage de  la list de ensigeinant
  lstchoix;//la list des choix des cours pour l'ensignant
  idvacataire;//id de l'enseignant pour l'association
  ListCours;//list des cours non assogner a un ensignant
  listCours;//list des cours d'un ensignant
  response;//pour recuperer les donnees
 vacataire:Vacataire = {id: null, nom: '',prenom:' ', adresse: {id: null , rue: '', ville: ''},cours:null,servcie:'' ,employeur:''};
  
  constructor(private service:VacataireServiceService) { }

  ngOnInit() {
    this.service.getall().subscribe(resp => {
       console.log(resp);
      this.response =  resp;
      this.lstvacataire = resp;
      console.log(this.lstvacataire);
    });
    
  }
  
  
  deletevacataire(id){//ok
    this.service.deletevacataire(id).subscribe(resp => {
       console.log(resp);
      this.lstvacataire = resp;
    });
  }
  
  update(id){//ok
     this.service.update(id).subscribe(resp => {
       console.log(resp);
      this.vacataire = resp as Vacataire;
    });
  }
  affichercours(id){
    this.idvacataire = id;
    this.service.affichercours(id).subscribe(resp => {
       console.log(resp);
      this.ListCours = resp;
    });
  }
  getcours(id){
      this.idvacataire = id ;
      this.service.listOfNonAssignedCours().subscribe(resp => {
      console.log(resp);
      this.response =  resp;
      this.listCours = this.response.valeur;
      console.log(this.lstvacataire);
    });
  }
  associate(f:NgForm){
    
  console.log("****************"); 
   let  lstc = f.controls['lstchoix'].value;
    console.log(lstc)
    console.log('id etudiant = '+this.idvacataire);
   for (let c of lstc){
     console.log(c);
    
      console.log("------------------------------------------------------------")
    
   this.service.couravacataire(this.idvacataire , c).subscribe(resp => {
       console.log(resp);
      this.response =  resp;
      this.lstvacataire = this.response;
    });
     console.log("------------------------------------------------------------")
    }
    
  };
  deletecoursvacataire(id){
     console.log("------------------------------------------------------------")
    console.log(this.idvacataire+'*-------*'+id);
     console.log("------------------------------------------------------------")
   this.service.deletecoursvacataire(this.idvacataire,id).subscribe(resp => {
       console.log(resp);
      this.response =  resp;
      this.lstvacataire = this.response;
    });
    
  }
  addvacataire(fromvacataire:NgForm){
    console.log(this.vacataire.nom);
    console.log(this.vacataire.prenom);
    console.log(this.vacataire.adresse.rue);
    console.log(this.vacataire.adresse.ville);
    console.log(this.vacataire.servcie);
    console.log(this.vacataire.employeur);
   this.service.addvacataire(this.vacataire).subscribe(resp => {
       this.response =  resp;
      this.lstvacataire = this.response;
    });
  }
  
  updatevacataire(fromvacataire:NgForm){
   
     this.service.addvacataire(this.vacataire).subscribe(resp => {
       this.response =  resp;
      this.lstvacataire = this.response;
    });
  }

}
