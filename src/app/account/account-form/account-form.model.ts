import { required, SchemaPathTree } from '@angular/forms/signals';

export interface Account {
  firstName: string;
  lastName: string;
}

export const AccountModel: Account = {
  firstName: '',
  lastName: ''
};

export function buildAccountSection(a: SchemaPathTree<Account>) {
  // required(a.firstName, { message: 'First name is required' });
  // required(a.lastName, { message: 'Last name is required' });

  required(a.firstName);
  required(a.lastName);
}
