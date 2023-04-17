import { Component } from '@angular/core';

@Component({
  selector: 'style-com',
  templateUrl: './style-com.component.html',
  styleUrls: ['./style-com.component.css']
})
export class StyleComComponent {
  whatcolor = true;


  pressed(){
    this.whatcolor = !this.whatcolor;
  }
}
