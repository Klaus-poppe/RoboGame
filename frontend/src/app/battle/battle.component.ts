import { Component, OnInit } from '@angular/core';
import { TroopService , Battle } from 'src/services/troop.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  tank = Math.floor(Math.random() * 10) + 1  
  b1 =  Math.floor(Math.random() * 60) + 1 
  b2 = 100 - (this.tank*1 + this.b1*1)
  totalDroidStrength =  this.tank*8 + this.b1*3 +this.b2*6
  totalDroidIntelligence= this.tank*8 + this.b1*3 +this.b2*6
  totalDroidAgility = this.tank*2 + this.b1*7 +this.b2*8
  display : Boolean =true
  result : Boolean = false
  arc : number
  ordnance : number
  scuba : number
  jetpack : number
  sharpshooter :number
  total :number
  totalStrength :number
  totalIntelligence :number
  totalAgility  :number 
  droid : number =0
  clone : number =0
  winner : string
  summary : string = ""
  battle : Battle = {
    id : "",
    winner : "",
    summary : ""
  }

  constructor(public data:TroopService) { 
    this.arc = null
    this.ordnance = null
    this.jetpack = null
    this.scuba = null
    this.sharpshooter = null
  }

  ngOnInit() {
    this.cloneSummary()
  }

  cloneSummary(){
    if(this.arc != null || this.ordnance != null || this.jetpack != null || this.scuba != null || this.sharpshooter!= null){
  this.total = this.arc*1 + this.ordnance*1 + this.jetpack*1 + this.scuba*1 + this.sharpshooter*1
  this.totalStrength = (this.arc* 6) + this.ordnance*9 + this.jetpack*8 + this.scuba*4 + this.sharpshooter*2
  this.totalIntelligence = (this.arc* 5) + this.ordnance*4 + this.jetpack*4 + this.scuba*7 + this.sharpshooter*8
  this.totalAgility = (this.arc* 3) + this.ordnance*7 + this.jetpack*8 + this.scuba*3 + this.sharpshooter*7
    }else{
      this.total = 0;
      this.totalStrength = 0
      this.totalIntelligence =0
      this.totalAgility = 0
    }
  }

  calcResult(){
    if(this.totalDroidStrength > this.totalStrength)
    {
      this.droid += 1
      this.summary += "Droid army's total strength (" + this.totalDroidStrength + ") is greater than clone trooper army's total strength (" + this.totalStrength +").  "
    }else{
      this.clone +=1
      this.summary += "Clone trooper army's total strength (" + this.totalStrength + ") is greater than droid army's total strength (" + this.totalDroidStrength +").  "
    }

    if(this.totalDroidAgility > this.totalAgility)
    {
      this.droid += 1
      this.summary += "Droid army's total agility (" + this.totalDroidAgility + ") is greater than clone trooper army's total agility (" + this.totalAgility +").  "
    }else{
      this.clone +=1
      this.summary += "Clone trooper army's total agility (" + this.totalAgility + ") is greater than droid army's total agility (" + this.totalDroidAgility +").  "
    
    }

    if(this.totalDroidIntelligence > this.totalIntelligence)
    {
      this.droid += 1
      this.summary += "Droid army's total intelligence (" + this.totalDroidIntelligence + ") is greater than clone trooper army's total intelligence (" + this.totalIntelligence +").  "
    }else{
      this.clone +=1
      this.summary += "Clone trooper army's total intelligence (" + this.totalIntelligence + ") is greater than droid army's total intelligence (" + this.totalDroidIntelligence +").  "
    
    }

    if(this.clone > this.droid) {
      this.winner = "Clone Troopers Win!!!!"
    }else{
      this.winner = "Droid army wins!"
    }
    console.log(this.totalDroidAgility + " " + this.totalDroidIntelligence + " " + this.totalDroidStrength)
    console.log(this.totalAgility + " " + this.totalIntelligence + " " + this.totalStrength)
    console.log (this.tank*1 + this.b1*1 +this.b2*1)
    this.battle.summary =this.summary
    this.battle.winner = this.winner
    this.data.addBattle(this.battle).subscribe(result => {
      console.log(result)
     },error =>{
       console.log(error)
     })
   
    this.display =false
    this.result = true

  }

 

}
