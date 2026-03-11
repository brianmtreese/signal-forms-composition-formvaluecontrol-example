import { Component, model } from '@angular/core';
import { FormField, FormValueControl, form, required } from '@angular/forms/signals';
import { Account, AccountModel } from './account-form.model';
import { ValidationErrorsComponent } from '../../shared/validation-errors/validation-errors.component';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss'],
  imports: [FormField, ValidationErrorsComponent],
})
// export class AccountFormComponent {
export class AccountFormComponent implements FormValueControl<Account> {
  // readonly form = input.required<FieldTree<Account>>();
  value = model<Account>(AccountModel);

  protected form = form(this.value, a => {
    required(a.firstName, { message: 'First name is required' });
    required(a.lastName, { message: 'Last name is required' });
  });
}

