import { FormControl } from '@angular/forms';

export function zipCodeValidator(ctrl: FormControl) {
    if (ctrl.value == 123456) {
        return null;
    }
    return {
        zipCode: {
            validpincode: 123456
        }
    };
}
