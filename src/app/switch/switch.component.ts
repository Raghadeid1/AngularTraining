import { Component } from '@angular/core';

@Component({
  selector: 'switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent {

  defaultView = '';

  SetView(view:any){
    this.defaultView = view;
  }
}
