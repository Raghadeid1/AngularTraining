import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-collapse-state',
  templateUrl: './collapse-state.component.html',
  styleUrls: ['./collapse-state.component.css'],
  animations: [
    trigger('expandCollapse',[
      //create a custom state called collapsed
      state('collapsed',style({
        opacity: 0,
      })),
      //create a custom state called expanded
      state('expanded',style({
        opacity: 1,
      })),
      //i can also transition between custom states
      transition('collapsed => expanded',[

        animate('1s',style({ opacity:1 }))
      ]),
      transition('expanded => collapsed',[

        animate('1s',style({ opacity:0 }))
      ])
    ])
  ]
})
export class CollapseStateComponent {

  clickedBtn = true;
  clickedBtn2 = true;
  clicked($event:any){
    this.clickedBtn = !this.clickedBtn;
    console.log($event);
  }
  clicked2($event:any){
    this.clickedBtn2 = !this.clickedBtn2;
    console.log($event);
  }

}
