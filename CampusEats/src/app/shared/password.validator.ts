import { FormControl, FormGroup } from '@angular/forms';

export  class PasswordValidator{
    static areEqual(fg: FormGroup){
        let val;
        let valid = true;

        for(let key in fg.controls){
           if (fg.controls.hasOwnProperty(key)) {
               let control: FormControl = <FormControl>fg.controls[key];
               if(val === undefined) {
                   val = control.value;
               }
               else
               {
                   if (val !== control.value) {
                       valid = false;
                       break;
                   }
               }
           }
        }
        if (valid) {
            return null;
        }
        else
        {
            areEqual: true;
        }
    }
}