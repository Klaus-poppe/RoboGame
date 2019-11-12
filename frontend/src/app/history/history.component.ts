import { Component, OnInit } from '@angular/core';
import { TroopService ,Battle } from 'src/services/troop.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  battles : Battle[]

  constructor(public data:TroopService) { }

  ngOnInit() {
    this.getBattles()
  }

  getBattles(){
    this.data.getBattles().subscribe(
      result =>{
        this.battles = result;
        console.log(this.battles)
      },
      error=>{
      console.error();
      }
    );
    }
}
