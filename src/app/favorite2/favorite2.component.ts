import { Component } from '@angular/core';

@Component({
  selector: 'favorite2',
  templateUrl: './favorite2.component.html',
  styleUrls: ['./favorite2.component.css']
})
export class Favorite2Component {

  isFavorite=true;

  Favorite(){
    this.isFavorite = !this.isFavorite;
  }

  

}
