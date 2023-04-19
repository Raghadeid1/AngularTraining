import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { fade, slide } from '../angular-animations/animations';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations:[

    //angular animations can be done this way
    //---------------------------------------
    // trigger('fade',[
    //transition from the void state to the default state
    //   transition('void => *',[
    //void state
    //     style({
    //       backgroundColor: 'yellow',
    //       opacity:0 }),
    //     animate(2000,
    //default state
    //     style({ backgroundColor:'red', opacity:1})),
    //   ]),
    //after the previous transition is done we will be in the default state, therefore fadeout
    //animate from the default state to the void state (remove from DOM)
    //   transition('* => void',[
    //     animate(1000,
    //     style({ opacity:0 })),
    //   ])
    // ])

    //we can also make angular animations this way to improve readability
    //this is a custom trigger made in angular-animations/animations.ts
    //-------------------------------------------------------------------
    // fade
    //slide is another custom animation, we use transform and translate my object on X
    slide
  ]
})
export class TodosComponent {

  items:string[] = [
    'ITShare',
    'Raghad Eid',
    'Hajar Ashraf'
  ];

  removeItem(value:any){
    const index = this.items.indexOf(value);
    this.items.splice(index,1);

  }
  addItem(value:any){
    this.items.splice(0,0,value);
  }
}
