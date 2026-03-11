import { signal } from '@angular/core';
import { SchemaPathTree } from '@angular/forms/signals';

export interface Preferences {
  marketingOptIn: boolean;
}

export const PreferencesModel: Preferences = {
  marketingOptIn: false
}

export function buildPreferencesSection(p: SchemaPathTree<Preferences>) {
  // No local validation for preferences
}


