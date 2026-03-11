import { Component, model } from '@angular/core';
import { FormField, FormValueControl, form, pattern, required } from '@angular/forms/signals';
import { Address, AddressModel } from './address-form.model';
import { ValidationErrorsComponent } from '../../shared/validation-errors/validation-errors.component';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
  imports: [FormField, ValidationErrorsComponent],
})
export class AddressFormComponent implements FormValueControl<Address> {
  value = model<Address>(AddressModel);
  
  protected form = form(this.value, s => {
    required(s.street, { message: 'Street is required' });
    required(s.city, { message: 'City is required' });
    required(s.state, { message: 'State is required' });
    required(s.zip, { message: 'ZIP code is required' });
    pattern(s.zip, /^\d{5}$/, { message: 'ZIP code must be 5 digits' });
  });
}
