import { Injectable } from '@angular/core';
import {Personne} from '../model/Personne';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {observable, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  personnes: Personne[];
  constructor(private http: HttpClient) {
  }
  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>('http://localhost:3000/api/personnes');
  }
  getPersonneById(id): Observable<Personne> {
    return this.http.get<Personne>('http://localhost:3000/api/personnes/' + id);
  }
  addPersonne(personne) {
    const token = localStorage.getItem('token');
    const headers =  new HttpHeaders().append('Authorization', token);
    return this.http.post('http://localhost:3000/api/personnes/', personne, {headers});
  }
  deletePersonne(id) {
    const token = localStorage.getItem('token');
    const headers =  new HttpHeaders().append('Authorization', token);
    return this.http.delete('http://localhost:3000/api/personnes/' + id, {headers});
  }
}
