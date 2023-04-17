import { Component } from '@angular/core';
import { DbService } from '../services/db.service';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  //used for property passing
  favState =true ;

  isActive?:boolean;


  courses:string[];
  constructor(dbService:DbService){
    this.courses = dbService.getAll();
  }

  favChanged(){
    console.log(this.favState);
  }


}
