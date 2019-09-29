# ShoppingCart Angular Application

## Overview

This project is to demo shopping cart angular app. The app architecture and some technologies(like ngrx, reactive form...) might look a bit of overkill for this simple shooping cart function, but it aims to demo implementation for Angular Enterprise SPA Application and consider shopping cart is one of the features.

## Summary

1. A Modularised grouping of features
2. A routing configuration that is consistent and easily ported to a lazy loading paradigm - ["routes.ts" pattern](https://medium.com/@shairez/angular-routing-a-better-pattern-for-large-scale-apps-f2890c952a18)
3. Redux pattern(ngrx) to manage Application state
4. Develope components with Presentational and Container Components
5. Unit testing components and ngrx store with mock store
6. Reactive Form to handle Add cart item
7. OnPush Strategy for better performance
8. Configed Prettier as coding format

## Components and Workflow

1. ShoppingCart component is the page component contains two components: AddCartItemComponent and CartListComponent
2. AddCartItemComponent - Get Input from parent component and emit event when add item
3. CartListComponent - Get Cart Items from the store via selector and dispatch action to update store when edit
4. Store manages all data including products and shopping cart items and use effects to communicate with back end if needed

## Key Logic for shopping cart CRUD in the store

1. Add cart item to the store if it is new item
2. If same product exists in the shopping cart, update its quantity by adding the new value - so the new item is merged to the existing items
3. Edit cart item based on product name and only allow edit quantity
4. Delete cart item based on product name

## Other Assumptions

1. Unit testing is not fully covered
2. simple CSS style without UI framework like Angular Material, ng zorro
3. UI validation and message notification are missing

## Technology Used

Angular 8
ngrx
prettier

## Build and Run the App

[Yarn](https://yarnpkg.com/en/) - Install if not already on your system

Install packages with

```
Yarn
```

Run app via

```
yarn start
```

open in [stackblitz link](https://stackblitz.com/github/dyjing-dev/shopping-cart)

## Development server

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.6.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
