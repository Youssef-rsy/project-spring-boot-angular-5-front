import { Cours } from '../../classe/cours';
import { Permanent } from '../../interface/permanent';
import { PermanentServiceService } from '../../service/permanent-service.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-permament',
  templateUrl: './permament.component.html',
  styleUrls: ['./permament.component.css']
})
export class PermamentComponent implements OnInit {

  lstpermanent;//pour affichage de  la list de ensigeinant
  lstchoix;//la list des choix des cours pour l'ensignant
  idpermanent;//id de l'enseignant pour l'association
  ListCours;//list des cours non assogner a un ensignant
  listCours;//list des cours d'un ensignant
  response;//pour recuperer les donnees
 permanent:Permanent = {id: null, nom: '',prenom:' ', adresse: {id: null , rue: '', ville: ''},cours:null,servcie:'' ,garde:''};
  
  constructor(private service:PermanentServiceService) { }

  ngOnInit() {
    this.service.getall().subscribe(resp => {
       console.log(resp);
      this.response =  resp;
      this.lstpermanent = resp;
      console.log(this.lstpermanent);
    });
    
  }
  
  
  deletepermanent(id){//ok
    this.service.deletepermanent(id).subscribe(resp => {
       console.log(resp);
      this.lstpermanent = resp;
    });
  }
  
  update(id){//ok
     this.service.update(id).subscribe(resp => {
       console.log(resp);
      this.permanent = resp as Permanent;
    });
  }
  affichercours(id){
    this.idpermanent = id;
    this.service.affichercours(id).subscribe(resp => {
       console.log(resp);
      this.ListCours = resp;
    });
  }
  getcours(id){
      this.idpermanent = id ;
      this.service.listOfNonAssignedCours().subscribe(resp => {
      console.log(resp);
      this.response =  resp;
      this.listCours = this.response.valeur;
      console.log(this.lstpermanent);
    });
  }
  associate(f:NgForm){
    
  console.log("****************"); 
   let  lstc = f.controls['lstchoix'].value;
    console.log(lstc)
    console.log('id etudiant = '+this.idpermanent);
   for (let c of lstc){
     console.log(c);
    
      console.log("------------------------------------------------------------")
    
   this.service.courapermanent(this.idpermanent , c).subscribe(resp => {
       console.log(resp);
      this.response =  resp;
      this.lstpermanent = this.response;
    });
     console.log("------------------------------------------------------------")
    }
    
  };
  deletecourspermanent(id){
     console.log("------------------------------------------------------------")
    console.log(this.idpermanent+'*-------*'+id);
     console.log("------------------------------------------------------------")
   this.service.deletecourspermanent(this.idpermanent,id).subscribe(resp => {
       console.log(resp);
      this.response =  resp;
      this.lstpermanent = this.response;
    });
    
  }
  addpermanent(frompermanent:NgForm){
   this.service.addpermanent(this.permanent).subscribe(resp => {
       this.response =  resp;
      this.lstpermanent = this.response;
    });
  }
  
  updatepermanent(frompermanent:NgForm){
   
     this.service.modifierinfos(this.permanent).subscribe(resp => {
       this.response =  resp;
      this.lstpermanent = this.response;
    });
  }
}
