# ngx-validation
Angular2 + form validators
[![Build Status](https://travis-ci.org/ReactiveCore-com/ngx-validation.svg?branch=master)](https://travis-ci.org/ReactiveCore-com/ngx-validation)
[![Coverage Status](https://coveralls.io/repos/github/ReactiveCore-com/ngx-validation/badge.svg?branch=master)](https://coveralls.io/github/ReactiveCore-com/ngx-validation?branch=master)

ngx-validation is made by ReactiveCore for common form issues:
- email validation
- file Uploading


### Installation
Install ngx-validation from npm:
```bash
npm install ngx-validation --save
```

### Setup
Set up in your project like this
```ts
 import{ NgxValidation } from 'ngx-validation'
 @NgModule({
   imports:[
   // ...
    NgxValidation,
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
