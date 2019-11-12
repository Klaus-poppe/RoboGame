import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { text } from '@angular/core/src/render3/instructions';

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


export interface Battle {
  id : string;
  winner : string
  summary : string
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

  getDroidTroops(): Observable<Troop[]> {
    let url = this.baseUrl+"troops/droid";
    return this.http.get<Troop[]>(url)
  }

  getCloneTroops(): Observable<Troop[]> {
    let url = this.baseUrl+"troops/clone";
    return this.http.get<Troop[]>(url)
  }

  getTroop(name: string): Observable<Troop> {
    let url = this.baseUrl+"troops/" + name;
    return this.http.get<Troop>(url)
  }

  insertTroop(troop: Troop) {
    let url = this.baseUrl+"troops/add"
    return this.http.post(url, troop , {responseType : "text"})
  }

  updateTroop(troop: Troop): Observable<void> {
    let url = this.baseUrl+"troops/" + troop.id
    return this.http.put<void>(url, troop)
  }

  deleteTroop(id: Number) {
    let url = this.baseUrl+"troops/" + id
    return this.http.delete(url)
  }

  getBattles() : Observable<Battle[]>{
    let url = this.baseUrl + "battles/"
    return this.http.get<Battle[]>(url)
  }

  addBattle(battle : Battle) {
    let url = this.baseUrl + "battles/add"
    return this.http.post(url, battle , {responseType : "text"})
  }
}