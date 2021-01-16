import { createGlobalStyle } from 'styled-components';

import fonts from './fonts';

export default createGlobalStyle`
html {
  box-sizing: border-box;
  font-size: 62.5%;
}

*,
*::after,
*::before {
  box-sizing: inherit;
}

body,
html {
  padding: 0;
  margin: 0;
}

body {
  ${fonts.small()}
  overflow-x: hidden;
}

body.overflow {
  overflow: hidden;
  height: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

p {
  margin: 0;
}

ul {
  padding: 0;
  list-style-type: none;
  margin: 0;
}

button {
  border: 0;
  outline: none;
  cursor: pointer;
  padding: 0;
  background-color: transparent;
}

a {
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}

input::-ms-clear {
  display: none;
}

:focus {
  outline: none;
}

html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
}

main {
  display: block;
}

h1 {
  font-size: 2em;
  margin: 0;
}

a {
  background-color: transparent;
}

img {
  border-style: none;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
}


[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

[hidden] {
  display: none;
}
`;
