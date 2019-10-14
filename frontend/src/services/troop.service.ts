import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

export interface Troop {
  id : string;
  kind: string;
  description : string;
  strength: Number;
  agility : Number;
  intelligence :Number;
  terrain : string ;
  type : string;
}

@Injectable({
  providedIn: 'root'
})
export class TroopService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:8000/';

  getAllTroops(): Observable<Troop[]> {
    let url = this.baseUrl+"troops/";
    return this.http.get<Troop[]>(url)
  }

  getTroop(name: string): Observable<Troop> {
    let url = this.baseUrl+"troops/" + name;
    return this.http.get<Troop>(url)
  }

  insertTroop(troop: Troop): Observable<Troop> {
    let url = this.baseUrl+"troops/add"
    return this.http.post<Troop>(url, troop)
  }

  updateTroop(troop: Troop): Observable<void> {
    let url = this.baseUrl+"troops/" + troop.id
    return this.http.put<void>(url, troop)
  }

  deleteTroop(id: Number) {
    let url = this.baseUrl+"troops/" + id
    return this.http.delete(url)
  }
}