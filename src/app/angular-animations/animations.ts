import { animate, animation, keyframes, style, transition, trigger,useAnimation } from '@angular/animations';
//also another way of setting states either by adding ":enter and :leave" in the same trigger ,
//or by adding two different states of :enter and :leave
export const slide =
  trigger('slide',[
    transition(':enter',[
      style({
        transform:'translateX(-100%)'}),
        //0.5s is the time it takes for the transition, 1s is the wait time before the transition
        animate("0.5s 1s ease-out")

    ]),
    transition(':leave',[
         // animate(550, style({transform:'translateX(100%)'})),
         //cubic-bezier animations which can be found on cubic-bezier.com
         animate("1s cubic-bezier(.21,1.35,.86,0)",style({transform:'translateX(100%)'}))
    ])
  ])


export const fade =
  trigger('fade',[
    transition(':enter, :leave',[
      style({
            // backgroundColor: 'yellow',
            opacity:0 }),
      animate(1000,style({ opacity:1 }))
    ])
  ])

//i can also create an animation with multiple movements with "keyframes" function
export const slidebackandforth =
  trigger("slidebackandforth",[
    transition(":enter",[
      style({
        transform:'translateX(-200px)'
      }),
      animate('0.5s 1s ease-in')
    ]),
    transition(":leave",[
    //transition with multiple animations or "keyframes"
    //first style is used for moving the object back
      animate('2s ease-out', keyframes([
        style({
          offset:.5,
          opacity:1,
          backgroundColor:'red',
          transform:'translateX(100px)'
        }),
      //second style is used for moving the object forward(out of the screen)
        style({
          offset:1,
          opacity:0,
          transform:'translateX(-100%)'
        }),
      ]))
    ])
  ])
  //this shows that i can create a const for multiple animations and call on them from a different
  //const, basically using a const as a function
  //creating reusable animations
  export const bounceOutAnimations =
    animation([
      animate('bounce-out', keyframes([
        style({
          offset:.5,
          opacity:1,
          backgroundColor:'red',
          transform:'translateX(100px)'
        }),
      //second style is used for moving the object forward(out of the screen)
        style({
          offset:1,
          opacity:0,
          transform:'translateX(-100%)'
        }),
      ]))
    ])
export const bounceOut =
    trigger("bouncing",[
      transition(":enter",[
        style({
          transform:'translateX(-10px)'
        })
      ]),
      transition(":leave",[
        useAnimation(bounceOutAnimations)
      ])
    ])
//this is animations with parameters
export const fadeInAnimation =
    animation([
      style({
        opacity:0,
        backgroundColor:'red',
      }),
      animate("{{duration}} {{easing}}")
    ],{
      //these are the default parameters
      params:{duration:'3s',easing:'ease-out'}
    })



