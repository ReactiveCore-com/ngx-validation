# ngx-validation
[![Build Status](https://travis-ci.org/ReactiveCore-com/ngx-validation.svg?branch=master)](https://travis-ci.org/ReactiveCore-com/ngx-validation)
[![Coverage Status](https://coveralls.io/repos/github/ReactiveCore-com/ngx-validation/badge.svg?branch=master)](https://coveralls.io/github/ReactiveCore-com/ngx-validation?branch=karma-fix)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/danrevah/ng-pipes/blob/master/LICENSE.md)


Angular2 + form validators

ngx-validation is made by ReactiveCore for common form validation:
- email validation
- file upload type validation
- sql query validation (dependent on https://github.com/forward/sql-parser)
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

#### Email Validation

  ```ts
    <input type="email" validateEmail>
  ```

#### File Upload Validation

  ```ts
    <input type="file" [fileType]="['docx','png']">
  ```
