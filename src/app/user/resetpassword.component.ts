import { Component , OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import {Zonegeographique} from '../model/zonegeographique';
import {Observable} from 'rxjs';
import {CrudserviceService} from '../service/crudservice.service';
import {any} from 'codelyzer/util/function';
import {Pays} from '../model/pays';
import {Etablissement} from '../model/etablissement';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-reset-password',
  templateUrl: './resetpassword.component.html'
})

export class ResetpasswordComponent implements OnInit{
  myForm: FormGroup;
  hasZoneGeographiqueLoaded = false;
  hasPaysLoaded = false;
  hasEtablissementLoaded = false;
  matcher = new MyErrorStateMatcher();
  zonegeographique$: Zonegeographique[] = [];
  pays$: Pays[] = [];
  etablissement$: Etablissement[] = [];
  selectedZoneGeo = 0;
  selectedPays = 0;
  selectedEtablissement = 0;
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.refrech();
  }
  // tslint:disable-next-line:typedef
  refrech(){
    this.crudService.findAllZoneGeographique().subscribe(
      response => {
        console.log(response);
        this.zonegeographique$ = response;
        this.hasZoneGeographiqueLoaded = true;
      }
    );
  }
  constructor(private formBuilder: FormBuilder, private crudService: CrudserviceService) {

    this.myForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      dateOfBitrth : ['', [Validators.required]],
      selectedZoneGeo : ['', [Validators.required]],
      selectedPays : ['', [Validators.required]],
      selectedEtablissement : ['', [Validators.required]],
      confirmPassword: ['']
    }, { validator: this.checkPasswords });

  }
  // tslint:disable-next-line:typedef
  selectChangeZoneGeoHandler(selectedZoneGeo: number){
    this.crudService.findPaysByIdZoneGeo(selectedZoneGeo).subscribe(
      response => {
        console.log(response);
        this.pays$ = response;
        this.hasPaysLoaded = true;
    });
  }
  // tslint:disable-next-line:typedef
  selectChangePaysHandler(selectedPays: number){
    this.crudService.findEtablissementByPaysId(selectedPays).subscribe(
      response => {
        console.log(response);
        this.etablissement$ = response;
        this.hasEtablissementLoaded = true;
      });
  }
  // tslint:disable-next-line:typedef
  selectChangeEtablissementHandler(selectedEtablissement: number){
    this.selectedEtablissement = selectedEtablissement;
  }
  // tslint:disable-next-line:typedef
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : { notSame: true };
  }

}
