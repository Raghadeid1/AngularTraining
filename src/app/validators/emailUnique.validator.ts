import { ValidationErrors } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
export class EmailValidator{

  static EmailExists(control: AbstractControl): Promise<ValidationErrors>
  {
    //simulation to data retrieval time this can be done with api like so
    //Emps = this.service.getdatafunction();
    //Emps now is a list of all empolyees
    //if(Emps.indexOf("raghad@gmail.com") !== -1){
    // return {EmailExists : true};
    //}
    //Promise is a callback asynchronous function which returns if the function is successful or
    //unsuccessful --> its like await in C# returns successful or non successful when the data is retrieved
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        if(control.value == "raghad@gmail.com")
        {
          console.log("same email");
          resolve ({EmailExists : true});
        }
        else{
          reject(null);
        }
      }, 2000);
    })
  }
}
