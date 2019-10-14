import { Component, OnInit } from '@angular/core';
import { TroopService, Troop } from 'src/services/troop.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public data:TroopService) {    }
  kind ="test"
  display:Boolean =false
  display1:Boolean =false
  troops : Troop[]
  troop : Troop;
  troop1 : Troop = {
    id : null,
    kind : null,
    description : null,
    strength : null,
    intelligence : null ,
    agility :null ,
    terrain : null,
    type : null
  };
  troop1Form : FormGroup;

  getTroop(){
    this.data.getTroop(this.kind).subscribe(
      result =>{
         console.log(result)
         this.troop = result
         this.display= true;
         this.display1=false;
        },
        error =>{ 
          console.error();
        })
  }

  getTroops(){
  this.data.getAllTroops().subscribe(
    result =>{
      console.log(result)
      this.troops = result;
      this.display1= true;
      this.display= false;
    },
    error=>{
    console.error();
    }
  );
  }

  addTroop(){
    this.data.insertTroop(this.troop1).subscribe(result => {
     console.log(result)

    },error =>{
      console.log(error)
    })
  }

}
