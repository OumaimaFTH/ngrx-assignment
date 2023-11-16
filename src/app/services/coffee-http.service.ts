import { Injectable } from '@angular/core';
import { Coffee } from '../models/coffee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoffeeHttpService {

  constructor(private http: HttpClient) { }

  findAllCoffees():Observable<Coffee[]>{

    return this.http.get<Coffee[]>('https://random-data-api.com/api/coffee/random_coffee?size=50');
    
  }
}
