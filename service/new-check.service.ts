import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewCheck } from '../model/new-check';

@Injectable({
  providedIn: 'root'
})
export class NewCheckService {

  baseUrl:string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3100/check';
   }

   getAll() : Observable<NewCheck[]>{
     return this.httpClient.get<NewCheck[]>(this.baseUrl)
   }

   getAllById(NewCheckOutId:number) : Observable<NewCheck>{
      return this.httpClient.get<NewCheck>(`${this.baseUrl}/${NewCheckOutId}`);
   }

   add(check:NewCheck) :Observable<NewCheck>{
     return this.httpClient.post<NewCheck>(this.baseUrl,check);
   }

   save(check:NewCheck) :Observable<NewCheck>{
    return this.httpClient.post<NewCheck>(this.baseUrl,check);
  }

  update(check:NewCheck) : Observable<NewCheck>{
    return this.httpClient.put<NewCheck>(this.baseUrl,check);
 }

 delete(NewCheckOutId:number) :Observable<NewCheck>{
  return this.httpClient.delete<NewCheck>(`${this.baseUrl + "/NewCheckOut"}/${NewCheckOutId}`);
}
}
