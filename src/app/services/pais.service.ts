
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {


  constructor( private http:HttpClient) { }


  getPaises() {

    return this.http.get('https://restcountries.com/v3.1/lang/spa')
    .pipe(
      map((resp: any = []) => {
        return resp.map( (pais: { name: any; alpha3Code: any; }) => {
          return {
             nombre: pais.name,
             codigo: pais.alpha3Code

             };
            });
          })
      );
  }


}
