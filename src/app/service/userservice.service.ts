import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Password} from '../model/password';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private httpService: HttpClient) { }

  resetPassword(id: number): Observable<string> {
    return this.httpService.get<string>(`${environment.apiPath}/user/resetPassword/${id}`);
  }
  changePassword(token: string): Observable<boolean> {
    return this.httpService.get<boolean>(
      `${environment.apiPath}/user/changePassword/${token}`
    );
  }

  updatePassword(password: Password): Observable<Password> {
    return this.httpService.post<Password>(
      `${environment.apiPath}/user/updatePassword`, password
    );
  }
}
