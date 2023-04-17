import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

  courseName="Angular 6";
  imageUrl = "https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067__340.png";
  colSpan = 10;
  @Input() isActive = false;
  nameVal = "";
  nameval="hello";
  keyUpMethod(firstname:string)
  {
        this.nameVal = firstname;
        this.nameval = firstname;
        console.log("enter was clicked");
  }
}
