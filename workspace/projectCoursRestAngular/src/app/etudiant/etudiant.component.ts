import { Cours } from '../classe/cours';
import { Adresse } from '../interface/adresse';
import { Etudiant } from '../interface/Etudiant';
import { Component, OnInit } from '@angular/core';
import {ServiceEtudiantService} from './../service/service-etudiant.service';
import { FormGroup, FormControl , FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  coursForm;
  url;
  response;
  listCours;
  listEtudiant;
  lstchoix : string[] = [];;//lists des cours choisis
   ListCours:Cours[] =  []; //Pour association des cours au etudiants
  etudiant:Etudiant = {id: null, nom: '',prenom:' ', adresse: {id: null , rue: '', ville: ''},specialite:''};
  
  constructor(private service: ServiceEtudiantService) { }
  
  ngOnInit() {
    this.service.getall().subscribe(resp => {
       console.log(resp);
      this.response =  resp;
      this.listEtudiant = this.response.valeur;
    });
    this.service.getAllCours().subscribe(resp => {
       console.log("------------------------");
      this.response =  resp;
      this.ListCours = this.response.valeur;
         console.log(this.response.valeur);
    });
  }

    onSubmit(){
  console.log(this.etudiant.adresse.rue);
   this.url = 'http://localhost:8080/addetudiant?etudiant='+this.etudiant;
 /*   console.log(this.url);*/
    this.service.save(this.etudiant).subscribe(resp => {
       console.log(resp);
      this.response =  resp;
      this.listEtudiant = this.response.valeur;
    });
    
  }
  

  delete(id){
     this.service.deletec(id).subscribe(resp => {
       console.log(resp);
      this.response =  resp;
      this.listEtudiant = this.response.valeur;
    });
  }

  getOone(id){
    this.service.getOne(id).subscribe(resp => {
       console.log(resp);
      this.response =  resp;
   console.log('----------------');
      this.etudiant = this.response.valeur;
    });
  }
  
  updateinfo(){
    console.log(this.etudiant.id);
    this.service.update(this.etudiant).subscribe( resp => {
      this.response =  resp;
      this.listEtudiant = this.response.valeur;
      });
  }
  
  coursList(id){
     this.service.coursLlist(id).subscribe(resp => {
       console.log(resp);
      this.response =  resp;
      this.listCours = this.response.valeur;
    });
  }
 
 idetudiant
  AddCoursToStudents(id){
    console.log(id);
    this.idetudiant = id;
    console.log( this.idetudiant);
  }
   
  associate(f:NgForm){
    console.log("****************"); 
   let  lstc = f.controls['lstchoix'].value;
    console.log('id etudiant = '+this.idetudiant);
   for (let c of lstc){
     console.log(c);
     let cour:Cours = this.ListCours[c-1];
     console.log(cour.id +' - '+cour.nom);
      console.log("------------------------------------------------------------")
    this.service.updatestudent(this.idetudiant , cour.id).subscribe(resp => {
       console.log(resp);
      this.response =  resp;
      this.listEtudiant = this.response.valeur;
    });
     console.log("------------------------------------------------------------")
     
     
   }
   
  }
}

