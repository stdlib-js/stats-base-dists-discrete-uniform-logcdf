<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Logarithm of Cumulative Distribution Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluate the natural logarithm of the [cumulative distribution function][cdf] for a [discrete uniform][discrete-uniform-distribution] distribution.

<section class="intro">

The [cumulative distribution function][cdf] for a [discrete uniform][discrete-uniform-distribution] random variable is

<!-- <equation class="equation" label="eq:discrete_uniform_cdf" align="center" raw="F(x)= \begin{cases} 0 & \text{for }x < a \\ \frac{\lfloor x \rfloor - a + 1}{b-a+1} & \text{for }a \le x < b \\ 1 & \text{for }x \ge b \end{cases}" alt="Cumulative distribution function for a discrete uniform distribution."> -->

```math
F(x)= \begin{cases} 0 & \text{for }x < a \\ \frac{\lfloor x \rfloor - a + 1}{b-a+1} & \text{for }a \le x < b \\ 1 & \text{for }x \ge b \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="F(x)= \begin{cases} 0 &amp; \text{for }x &lt; a \\ \frac{\lfloor x \rfloor - a + 1}{b-a+1} &amp; \text{for }a \le x &lt; b \\ 1 &amp; \text{for }x \ge b \end{cases}" data-equation="eq:discrete_uniform_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/discrete-uniform/logcdf/docs/img/equation_discrete_uniform_cdf.svg" alt="Cumulative distribution function for a discrete uniform distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `a` is the minimum support and `b` is the maximum support. The parameters must satisfy `a <= b`.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
logcdf = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-discrete-uniform-logcdf@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var logcdf = require( 'path/to/vendor/umd/stats-base-dists-discrete-uniform-logcdf/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-discrete-uniform-logcdf@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.logcdf;
})();
</script>
```

#### logcdf( x, a, b )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF) for a [discrete uniform][discrete-uniform-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var y = logcdf( 9.0, 0, 10 );
// returns ~-0.095

y = logcdf( 0.5, -2, 2 );
// returns ~-0.511

y = logcdf( -Infinity, 2, 4 );
// returns -Infinity

y = logcdf( Infinity, 2, 4 );
// returns 0.0
```

If `a` or `b` is not an integer value, the function returns `NaN`.

```javascript
var y = logcdf( 2.0, 1, 5.5 );
// returns NaN
```

If provided `a > b`, the function returns `NaN`.

```javascript
var y = logcdf( 0.5, 3, 2);
// returns NaN
```

If provided `NaN` for any parameter, the function returns `NaN`.

```javascript
var y = logcdf( NaN, 0, 1 );
// returns NaN

y = logcdf( 0.0, NaN, 1 );
// returns NaN

y = logcdf( 0.0, 0, NaN );
// returns NaN
```

#### logcdf.factory( a, b )

Returns a function for evaluating the natural logarithm of the [cumulative distribution function][cdf] of a [discrete uniform][discrete-uniform-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var myLogCDF = logcdf.factory( 0, 10 );
var y = myLogCDF( 0.5 );
// returns ~-2.398

y = myLogCDF( 8.0 );
// returns ~-0.201
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-array-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-discrete-uniform-logcdf@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var x;
var a;
var b;
var v;
var i;

x = uniform( 10, -10.0, 10.0 );
a = discreteUniform( 10, -10, 0 );
b = discreteUniform( 10, 0, 10 );

for ( i = 0; i < x.length; i++ ) {
    v = logcdf( x[ i ], a[ i ], b[ i ] );
    console.log( 'x: %d, a: %d, b: %d, ln(F(x;a,b)): %d', x[ i ].toFixed( 4 ), a[ i ], b[ i ], v.toFixed( 4 ) );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-discrete-uniform-logcdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-discrete-uniform-logcdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-logcdf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-logcdf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-discrete-uniform-logcdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-discrete-uniform-logcdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-discrete-uniform-logcdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-discrete-uniform-logcdf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-logcdf/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-logcdf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-logcdf/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-logcdf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-logcdf/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-logcdf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-logcdf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-discrete-uniform-logcdf/main/LICENSE

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[discrete-uniform-distribution]: https://en.wikipedia.org/wiki/Discrete_uniform_distribution

</section>

<!-- /.links -->
