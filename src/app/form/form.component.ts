import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { TextValidator } from '../validators/validator.validation';
import { EmailValidator } from '../validators/emailUnique.validator';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  //these are for the template driven validation
  @Output() submit = new EventEmitter();

  logObj(email:any){
    console.log(email);
  }

  Submit(){
    this.submit.emit();
  }
  CheckData(data:any){
    console.log(data);
  }



  //these are for the reactive driven validation
  //formControl takes the following values:
  //FormControl(value: string | FormControlState<string>, validatorOrOpts?: FormControlOptions
  // | ValidatorFn | ValidatorFn[] | null | undefined, asyncValidator?: AsyncValidatorFn |
  //AsyncValidatorFn[] | null | undefined): FormControl<string | null>
  //first thing which is value which means initial value
  //CustomValidators is part of the ng2 validation library in the reactive validation section

  //TextValidator is a custom validator
  myForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
    age : new FormControl('', CustomValidators.range([5, 10])),
    phone : new FormControl('', TextValidator.noSpaceAllowed),
    email : new FormControl('', [Validators.required], EmailValidator.EmailExists)
  });


  //these functions are created for efficiency
  get Username(){
    return this.myForm.get('username');
  }
  get Age(){
    return this.myForm.get('age');
  }
  get Phone(){
    return this.myForm.get('phone');
  }
  get Email(){
    return this.myForm.get('email');
  }



}
