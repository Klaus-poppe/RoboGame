import { Component, OnInit } from '@angular/core';
import { TroopService, Troop } from 'src/services/troop.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  ngOnInit(): void {
    this.getCloneTroops()
    this.getDroidTroops()
 
  }

  constructor(public data:TroopService) {    }
  kind =""
  display:Boolean =false
  display1:Boolean =false
  clones : Troop[]
  droids : Troop[]
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


  getTroop(){
    this.data.getTroop(this.kind).subscribe(
      result =>{
         this.troop = result
         this.display= true;
         this.display1=false;
        },
        error =>{ 
          console.error();
        })
  }

  

  getCloneTroops(){
    this.data.getCloneTroops().subscribe(
      result =>{
        
        this.clones = result;
        this.display1= true;
        this.display= false;

      },
      error=>{
      console.error();
      }
    );
    }


  getDroidTroops(){
    this.data.getDroidTroops().subscribe(
      result =>{
    
        this.droids = result;
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
     window.location.reload() 
     console.log(result)

    },error =>{
      console.log(error)
    })
  }

  deleteTroop(id : Number){
    this.data.deleteTroop(id).subscribe(result => { 
      window.location.reload()    
      console.log(result)
 
     },error =>{
       console.log(error)
     })
  }

  updateTroop(troop : Troop){
    this.data.updateTroop(troop).subscribe(result => {
      window.location.reload()
      console.log(result)
     },error =>{
       console.log(error)
     })
  }

}
