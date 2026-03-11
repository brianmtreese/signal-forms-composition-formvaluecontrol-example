import { signal } from '@angular/core';
import { required, pattern, SchemaPathTree } from '@angular/forms/signals';

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export const AddressModel: Address = {
  street: '',
  city: '',
  state: '',
  zip: ''
}

export function buildAddressSection(a: SchemaPathTree<Address>) {
  // required(a.street, { message: 'Street is required' });
  // required(a.city, { message: 'City is required' });
  // required(a.state, { message: 'State is required' });
  // required(a.zip, { message: 'ZIP code is required' });
  // pattern(a.zip, /^\d{5}$/, { message: 'ZIP code must be 5 digits' });

  required(a.street);
  required(a.city);
  required(a.state);
  required(a.zip);
  pattern(a.zip, /^\d{5}$/);
}


