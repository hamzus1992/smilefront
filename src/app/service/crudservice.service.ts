import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Zonegeographique} from '../model/zonegeographique';
import {Pays} from '../model/pays';
import {Etablissement} from '../model/etablissement';

@Injectable({
  providedIn: 'root'
})
export class CrudserviceService {

  constructor(private httpService: HttpClient) { }
  findAllZoneGeographique(): Observable<Zonegeographique[]> {
    return this.httpService.get<Zonegeographique[]>(
      `${environment.apiPath}/zonegeographique/`
    );
  }
  findPaysByIdZoneGeo(id: number): Observable<Pays[]> {
    return this.httpService.get<Pays[]>(
      `${environment.apiPath}/pays/${id}`
    );
  }
  findEtablissementByPaysId(id: number): Observable<Etablissement[]> {
    return this.httpService.get<Etablissement[]>(
      `${environment.apiPath}/etablissement/${id}`
    );
  }

}
