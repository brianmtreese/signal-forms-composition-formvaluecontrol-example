# Angular Signal Forms – FormValueControl Section Composition Example

This repository contains an **alternative implementation** of a large Angular form built using **Angular Signal Forms**.

Instead of passing **FieldTree slices** to child components (as shown in the previous example), this version explores using **`FormValueControl`** to turn entire form sections into **custom form controls**.

The goal of this experiment is to evaluate whether `FormValueControl` provides a cleaner architecture for **reusable form sections in large Signal Forms**.

---

## What This Repo Demonstrates

- Angular Signal Forms used in a **multi-section form**
- Converting form sections into **custom controls using `FormValueControl`**
- Using `model()` signals as the value source for custom form components
- Local form schemas defined inside section components
- Connecting custom section components to the parent form using `formField`
- Limitations of this approach, particularly around **validation propagation**

This repository represents a **possible alternative architecture** for structuring large Signal Forms using custom controls.

---

## Key Architectural Concepts

### FormValueControl Components

Each form section implements `FormValueControl<T>` and exposes a `value` model signal.

This allows the component to behave like a **custom form control** that can be bound using the `formField` directive.

### Local Form Schemas

Each section component creates its own form using:

```ts
form(this.value, schema => { ... })
```

This allows the component to define its own fields and validation rules internally.

## Parent Form Integration

The parent form treats each section component as a single field and connects it using the formField directive.

```html
<app-account-form [formField]="form.account" />
```

## Validation Duplication Tradeoff

Because validation defined inside child forms does not automatically propagate to the parent form, some validation rules must still be defined in the parent schema.

This highlights a potential limitation of this pattern when building large forms.

---

## Directory Structure Overview
```
account/
  account-form.model.ts
  account-form.component.ts

shipping/
  address-form.model.ts
  address-form.component.ts

sign-up/
  profile-form.component.ts
```

---

## How to Run
```bash
npm install
ng serve
```

---

## Related Resources

🎥 YouTube Tutorial (FormValueControl Experiment)
https://youtu.be/COMING_SOON

🎥 Original Tutorial – Scalable Signal Form Composition
https://youtu.be/hgy3t9mFmuc

🟥 Original Composition Example Repository
https://github.com/brianmtreese/signal-forms-composition-example-before

---

## When to Use This Pattern

This pattern may be useful when:

- building complex custom form controls
- encapsulating a component that represents a single logical value
- creating reusable UI components that behave like native form inputs

However, for large multi-field form sections, the FieldTree slice pattern from the original example may still provide a cleaner architecture.