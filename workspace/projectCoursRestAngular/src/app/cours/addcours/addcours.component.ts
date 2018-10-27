import { Cours } from '../../classe/cours';
import { Component, OnInit } from '@angular/core';
import { CoursServiceService } from './../../service/cours-service.service';
import { FormGroup, FormControl , FormBuilder, Validators, NgForm } from '@angular/forms';
import { forEachChild } from 'typescript';

@Component({
  selector: 'app-addcours',
  templateUrl: './addcours.component.html',
  styleUrls: ['./addcours.component.css']
})
export class AddcoursComponent implements OnInit {

  coursForm;
  url;
  response;
  listCours;
  listEtudiant;
  
   mycours;
  idCours:number = 0;
  nomCours:string = '';
  
  constructor(private _fb: FormBuilder,private coursService :CoursServiceService ) {}

  ngOnInit() {
     this.url = 'http://localhost:8080/cours';
    console.log(this.url);
    this.coursService.getAll(this.url).subscribe(resp => {
       console.log(resp);
      this.response =  resp;
      this.listCours = this.response.valeur;
      for(let cour in this.response.valeur){
        console.log(this.response.valeur[cour]);
      }
    });
    
   console.log('hhh');
    this.coursForm = this._fb.group({
         nom: ['Jee_avancee', [<any>Validators.required, <any>Validators.minLength(5)]]
    });
  }
  printForm() {
  console.log(this.coursForm);
  };
  
  save(nom){
    console.log(nom.value);
    this.url = 'http://localhost:8080/addcour?name='+nom.value;
    console.log(this.url);
    this.coursService.save(this.url).subscribe(resp => {
      this.response =  resp;
      this.listCours = this.response.valeur;
      console.log(this.listCours);
    });
  };
  deletecour(id){
    console.log(id);
    this.url = 'http://localhost:8080/deletecour?courid='+id;
    console.log(this.url);
    this.coursService.delete(this.url).subscribe(resp => {
       console.log(resp);
      this.response =  resp;
      this.listCours = this.response.valeur;
    });
  };
  showOne(id){
       console.log('-----------------------------------');
    this.url = 'http://localhost:8080/updatecour?courid='+id;
    console.log(this.url);
    this.coursService.getOne(this.url).subscribe(resp => {
       console.log(resp);
      this.response =  resp;
      this.mycours = this.response.valeur;
      this.idCours = this.mycours.id as number;
      this.nomCours = this.mycours.nom as string;
    });
  };
  
  update(id,name){
     console.log(this.idCours +'------------------------------------'+this.nomCours);
    this.url = 'http://localhost:8080/updateinfos?idtoup='+this.idCours+'&name='+this.nomCours;
    console.log(this.url);
    this.coursService.update(this.url).subscribe(resp => {
       console.log(resp);
      this.response =  resp;
      this.listCours = this.response.valeur;
    });
  };

  
    showStudents(id){
       console.log('----------------------------------- Show students --------------------------------------');
    this.url = 'http://localhost:8080/listetudiant?courid='+id;
    console.log(this.url);
    this.coursService.getOne(this.url).subscribe(resp => {
       
      this.response =  resp;
      this.mycours = this.response.valeur;
      this.listEtudiant  = this.mycours.etudiants;
       console.log(this.listEtudiant );
    //  console.log("----------",this.listEtudiant.length);
      
    });
  };
  
}
