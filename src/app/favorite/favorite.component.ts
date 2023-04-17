import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {

  //used when passing properties between components
  @Input('isfavorite') isSelected  = false;
  @Output() change = new EventEmitter();

  //Custom pipe
  title="lorem ipsum pipe custom";



  //Array for pipe
  Employees={
    fullName:"Raghad Eid",
    rating:5.97,
    salary:2000,
    hireDate: new Date(2015,5,1)
  }

  onFavoriteClick(){
    this.isSelected = !this.isSelected;
    this.change.emit(); //fire this function
  }

}
