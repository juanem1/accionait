import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  private url = 'https://apis.datos.gob.ar/georef/api';

  constructor(private http: HttpClient) {}

  loadAll() {
    return this.http.get(`${this.url}/provincias`);
  }

  search(name) {
    return this.http.get(`${this.url}/provincias?nombre=${name}`);
  }



}
