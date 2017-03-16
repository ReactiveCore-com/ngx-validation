# ngx-validation

[![Coverage Status](https://coveralls.io/repos/github/ReactiveCore-com/ngx-validation/badge.svg?branch=master)](https://coveralls.io/github/ReactiveCore-com/ngx-validation?branch=karma-fix)
[![Coverage Status](https://coveralls.io/repos/github/ReactiveCore-com/ngx-validation/badge.svg?branch=master)](https://coveralls.io/github/ReactiveCore-com/ngx-validation?branch=master)

Angular2 + form validators

ngx-validation is made by ReactiveCore for common form validation:
- email validation
- file upload type validation
- sql query validation
- equals validation


### Installation
Install ngx-validation from npm:
```bash
npm install ngx-validation --save
```

### Setup
Set up in your project like this
```ts
 import{ NgValidationModule } from 'ngx-validation'
 @NgModule({
   imports:[
   // ...
    NgValidationModule,
   // ...
   ]
 })
```

### Examples
 use the email validator
  ```ts
  //  put the directive right on the formControl
    <input mdInput placeholder="Email" validateEmail  formControlName="email" >
  ```
