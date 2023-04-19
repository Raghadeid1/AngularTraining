import { animate, style, transition, trigger } from '@angular/animations';
//also another way of setting states either by adding ":enter and :leave" in the same trigger ,
//or by adding two different states of :enter and :leave
export const slide =
  trigger('slide',[
    transition(':enter',[
      style({
        transform:'translateX(-100%)'}),
        animate(550)
    ]),
    transition(':leave',[
        animate(550, style({transform:'translateX(100%)'}))
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

