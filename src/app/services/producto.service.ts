import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  // Crea un cliente HTTP para conectarse al backend
  constructor( private http: HttpClient ) { }

  getAll(): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.http.get('http://localhost:3000/api/producto/', httpOption);
  }
}
