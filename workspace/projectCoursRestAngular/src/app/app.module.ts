import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddcoursComponent } from './cours/addcours/addcours.component';
import { AppBootstrapModule } from './app-bootstrap.module';

/***********************Service http ************************/
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

/********************Service*************************************/
import { CoursServiceService } from './service/cours-service.service';
import {ServiceEtudiantService} from './service/service-etudiant.service';
import { PermanentServiceService } from './service/permanent-service.service';
import { VacataireServiceService } from './service/vacataire-service.service'; 
/*********************Routing*************************************/
import { RouterModule , Routes } from '@angular/router';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { PermamentComponent } from './ensignant/permament/permament.component';
import { VacataireComponent } from './ensignant/vacataire/vacataire.component';

const Coursroute: Routes = [

   { path: 'cours' , component: AddcoursComponent},
   { path:'etudiants' , component: EtudiantComponent},
   { path: 'permanent' , component: PermamentComponent},
   { path:'vacataire' , component: VacataireComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AddcoursComponent,
    EtudiantComponent,
    PermamentComponent,
    VacataireComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      Coursroute
    )
  ],
  providers: [CoursServiceService , ServiceEtudiantService , PermanentServiceService  , VacataireServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
