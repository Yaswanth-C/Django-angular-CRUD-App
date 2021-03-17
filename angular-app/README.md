# AngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1.

## npm install

Do an `npm install` to get the dependencies installed if you want to modify the code and build.

## Build

To build the project use 

```
ng build --prod --output-hashing none
```

Use  `--output-hashing` because it removes the hash that appends with the filenames.

The output is configured to put build files in the static directory of Django project , which is `django-back-end/static/angular`.