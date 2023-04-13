import { Component } from '@angular/core';

@Component({
  selector: 'directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  people:string[]=["raghad","logain","doaa", "wessam","hajar"];

  //Create an array with multiple objects
  peopleByCountry:any[] = [
    {
      country:'Egypt',
      names:
      [
        { name:'ITShare' },
        { name:'Training - Mansoura' }
      ]

    },
    {
      country:'Turkey',
      names:
      [
        { name:'raghad eid' },
        { name:'aaaaa' }
      ]
    },
  ]

  courses:any[] =
  [
    { id:1, coursename:'php' },
    { id:2, coursename:'python' },
    { id:3, coursename:'c#' }
  ]

  onAdd(){
    this.courses.push({id:4,coursename:'Angular'});
  }
  onRemove(course:any){
    const index = this.courses.indexOf(course);
    this.courses.splice(index,1);
  }


  // used for trackBy directive.
  //explanation: if course exists then return course.id else return undefined
  trackByCourse(index:any,course:any){
    return course? course.id : undefined;
  }


  ngOnInit(): void {
    console.log(this.peopleByCountry);
  }

}
