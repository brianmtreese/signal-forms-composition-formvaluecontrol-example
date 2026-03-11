import { Component, model } from '@angular/core';
import { form, FormField, FormValueControl } from '@angular/forms/signals';
import { Preferences, PreferencesModel } from './preferences-form.model';

@Component({
  selector: 'app-preferences-form',
  templateUrl: './preferences-form.component.html',
  styleUrls: ['./preferences-form.component.scss'],
  imports: [FormField],
})
// export class PreferencesFormComponent {
export class PreferencesFormComponent implements FormValueControl<Preferences> {
  // readonly form = input.required<FieldTree<Preferences>>();
  value = model<Preferences>(PreferencesModel);

  protected form = form(this.value);
}

