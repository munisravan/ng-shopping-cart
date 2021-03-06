<h1 align="center">NgShoppingCart</h1>
<p align="center">
  <img alt="Shopping cart" width="400" src="https://github.com/devconcept/ng-shopping-cart/blob/master/src/cart.svg">
</p>
<p align="center">
  <a href="https://travis-ci.org/devconcept/ng-shopping-cart">
    <img alt="Build status" src="https://travis-ci.org/devconcept/ng-shopping-cart.svg?branch=master">
  </a>
  <a href="https://coveralls.io/github/devconcept/ng-shopping-cart?branch=master">
    <img alt="Code coverage" src="https://coveralls.io/repos/github/devconcept/ng-shopping-cart/badge.svg?branch=master">
  </a> 
  <img alt="Npm version" src="https://img.shields.io/npm/v/ng-shopping-cart.svg">
  <img alt="Monthly downloads" src="https://img.shields.io/npm/dm/ng-shopping-cart.svg">
</p>

<p align="center">
An Angular component library to create shopping carts. Based on it's <a href="http://ngcart.snapjay.com/" alt="ngCart">predecessor</a> for Angular.js with tons of improvements.
</p>


## Features

- All the previous components with more features.
- An extra `CartShowcaseComponent` to help e-commerce applications to quickly build screens to display their available products.
- Generic services to use your own data structures for cart items. Only a few required methods needs to be implemented to interop with the library.
- A default `CartItem` class ready to go, easy to replace.
- Several built-in `CartService` implementations to persist cart information in different ways.
- Easily customizable styles with `Sass` variables

> This library is compatible with Angular version >=5

## Installation

Using `npm`

```bash
npm install ng-shopping-cart --save
```

or `yarn`

```bash
yarn add ng-shopping-cart
```


## Documentation

Documentation is available at http://devconcept.github.io/ng-shopping-cart/


[Dgeni][dgeni-github] is used to automatically generate documentation from the source code. 

If you spot an error please consider [reporting it](https://github.com/devconcept/ng-shopping-cart/issues).

## Demo

You can find a demo of the library in the url http://devconcept.github.io/ng-shopping-cart/demo/. 

The demo is also available if you:

- Clone the repository
- Install it's dependencies with `npm install`
- Run `npm start` or `ng run demo`

## Upcoming features

- [ ] Less and stylus support

- [ ] Aria enabled components

- [ ] Support for object keys in cart items

- [ ] Built-in service for storing cart items in a remote server

- [ ] Stripe checkout support

- [ ] Enhanced PayPal support

- [ ] Flexbox and CSS grid support

- [ ] Reactive components?

Ideas and suggestions are always welcome. You can also contribute. Check the [contribution guidelines](https://github.com/devconcept/ng-shopping-cart/blob/master/CONTRIBUTING.md).

## License

[MIT](https://github.com/devconcept/ng-shopping-cart/blob/master/LICENSE)

[dgeni-github]: https://github.com/angular/dgeni "Dgeni"




