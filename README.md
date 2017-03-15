# ngx-validation
Angular2 + form validators

ngx-validation is made in ReactiveCore for some common form issues:
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
