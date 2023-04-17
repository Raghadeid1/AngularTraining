import { Component } from '@angular/core';
import { interval, map, Observable, take } from 'rxjs';
@Component({
  selector: 'rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent {

  //open console to view the functionality

  //interval function in rxjs can be used like a timer, which loops around for a certain number
  //of miliseconds here its "1000" and does a certain functionality
  obs = interval(1000).subscribe( a => {
    if(a < 10)
    {
      console.log(a);
    }
  });
  //if i want to add multiple operations into my observable i use "pipe" and inside i can
  //add my extra operations
  //the take operation take only the object of the number given, therefore below it take only
  //the first 3 objects
  obs2 = interval(1000).pipe(take(3)).subscribe( a => {
    if(a < 10)
    {
      console.log(a);
    }
  });
  //next operation is map, map is used to change objects from one datatype to another
  obs3 = interval(1000).pipe(take(3),map(d => Date.now)).subscribe(a => {
    console.dir(a);
  });

}
