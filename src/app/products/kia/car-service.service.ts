import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  getAll() {
    throw new Error('Method not implemented.');
  }
  getProducts() {
    throw new Error('Method not implemented.');
  }


  constructor(private http: HttpClient) {}




}

