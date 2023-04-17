import { AbstractControl, ValidationErrors } from "@angular/forms";

//A Custom made validator
export class TextValidator{
  //this method will have a return  type of ValidationErrors
  //to call my validator directly like "TextValidator." then i would have to make it a "static" class
  static noSpaceAllowed(control: AbstractControl) : ValidationErrors | null
  {
    //abstractControl is  the parent of the FormControl class and the FormGroup class
    //therefore in this statement we as if the formcontrol or the formgroup .value (and we cast as a string)
    //if the value has a ' ' which is a space -> != -1 it contain space then return true else return null
    if((control.value as string).indexOf(' ') != -1)
    {
      return {noSpaceAllowed: true};
    }
    else{
      return null;
    }
  }


}
