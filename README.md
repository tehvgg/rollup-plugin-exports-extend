# rollup-plugin-exports-extend

Remap the `exports` object in an IIFE bundle to extend and existing object.

```js
// ES5 IIFE bundle w/ Rollup
var myLib = (function (exports)) {
	var MyClass = function () ...
	exports.MyClass = MyClass;
}({})); // <--- object we want to remap

// Now after setting an object to extend
var myLib = (function (exports)) {
	var MyClass = function () ...
	exports.MyClass = MyClass;
}(someOtherWindowObject));
```

## Install

```
$ npm i rollup-plugin-exports-extend [--save-dev]
```

## Usage

```js
import rollup from 'rollup';
import exportsExtend from 'rollup-plugin-exports-extend';

rollup.rollup({
  plugins: [
    exportsExtend('someOtherWindowObject') // can also do something like 'this.lib.obj' if it will already exist when your lib is loaded
  ]
});
```

## License

MIT
