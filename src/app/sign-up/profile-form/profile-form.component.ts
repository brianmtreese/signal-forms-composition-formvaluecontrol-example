import { Component } from '@angular/core';
import { form, FormField, submit } from '@angular/forms/signals';
import { signal } from '@angular/core';
import { AccountModel, Account, buildAccountSection } from '../../account/account-form/account-form.model';
import { buildAddressSection, Address, AddressModel } from '../../shipping/address-form/address-form.model';
import { buildPreferencesSection, Preferences, PreferencesModel } from '../../account/preferences-form/preferences-form.model';
import { AccountFormComponent } from '../../account/account-form/account-form.component';
import { AddressFormComponent } from '../../shipping/address-form/address-form.component';
import { PreferencesFormComponent } from '../../account/preferences-form/preferences-form.component';
import { DebugPanelComponent } from '../../shared/debug-panel/debug-panel.component';

interface Profile {
  account: Account;
  shippingAddress: Address;
  preferences: Preferences;
}

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
  imports: [
    AccountFormComponent,
    AddressFormComponent,
    PreferencesFormComponent,
    DebugPanelComponent,
    FormField
  ],
})
export class ProfileFormComponent {
  readonly model = signal<Profile>({
    account: AccountModel,
    shippingAddress: AddressModel,
    preferences: PreferencesModel
  });

  readonly form = form(this.model, s => {
    buildAccountSection(s.account);
    buildAddressSection(s.shippingAddress);
    buildPreferencesSection(s.preferences);
  });


  onSubmit(event: SubmitEvent) {
    event.preventDefault();
    submit(this.form, async data => {
      console.log('Form submitted:', data().value());
      return undefined;
    });
  }
}


