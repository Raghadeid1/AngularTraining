import { animate, animateChild, query, stagger, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { fade, slide, slidebackandforth,bounceOut, fadeInAnimation } from '../angular-animations/animations';

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
    //-------------------------------------------------------------------
    //slide is another custom animation, we use transform and translate my object on X
    //-------------------------------------------------------------------
    // slide
    //-------------------------------------------------------------------
    //slidebackandforth is a custom animation using keyframes function
    //-------------------------------------------------------------------
    // slidebackandforth
    //-------------------------------------------------------------------
    //a reuseable animation with parameters
    //-------------------------------------------------------------------
    trigger('fadeInParameters', [
      transition(":enter", useAnimation(
        fadeInAnimation, {
        params: {
          duration: '250ms', easing: "ease-in-out"
        }
      })),
      transition(":leave", [
        style({opacity:0}),
        animate(2000)
      ]),
    ]),
    //-------------------------------------------------------------------
    //a reusable animation 2
    //-------------------------------------------------------------------
    trigger('listItemSlide', [
      transition(":enter", [
        query(".list-group-item", stagger(1000,[
          style({
            opacity:0,
            transform: 'translateX(-150%)'
          }),
          animate(1000)
        ])),
      ]),
      transition(":leave", [
        query(".list-group-item", stagger(1000, [
          style({
            opacity:1,
            transform: 'translateX(100%)'
          }),
          animate(1000)
        ])),
      ]),
    ]),
    //-------------------------------------------------------------------
    //query is a function that can select specific items like h1/certain css element/can also
    //query all using "*", here we select all H1's
    //-------------------------------------------------------------------
    // trigger('toDosAnimations', [
    //   transition(":enter", [
    //     query('h1', [
    //       style({
    //         transform: 'translateY(-50px)'
    //       }),
    //       animate(1000)
    //     ]),
        //-------------------------------------------------------------------
        //now i can use animateChild which is a function that triggers the next child animation,
        //after this animation is done (the parent animation)
        //without animateChild, all animations will work at the same time
        //-------------------------------------------------------------------
    //     query("@fadeInParameters", animateChild())
    //   ])
    // ]),
    //-------------------------------------------------------------------
    //i can add stagger to make my object appear after a certain time
    //-------------------------------------------------------------------
    // trigger('toDosAnimations', [
    //   transition(":enter", [
    //     query('h1', [
    //       style({
    //         transform: 'translateY(-50px)'
    //       }),
    //       animate(1000)
    //     ]),
    //     query("@fadeInParameters", stagger(1000,animateChild()))
    //   ])
    // ]),
    //-------------------------------------------------------------------
    //i can also query css classes like so, when i query css classes i have to remove the @animationName from the HTML
    //therefore now i don't need the animateChild() function because i can set my own style and animation
    //-------------------------------------------------------------------
    trigger('toDosAnimations', [
      transition(":enter", [
        query('h1', [
          style({
            transform: 'translateY(-50px)'
          }),
          animate(1000)
        ]),
        query("@listItemSlide", stagger(1000,animateChild()))
      ]),
      transition(":leave", [
        query("@listItemSlide", stagger(1000,animateChild()))

      ])
    ]),


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
  animationStart($event:any){
    console.log($event);
  }
  animationEnd($event:any){
    console.log($event);
  }
}
