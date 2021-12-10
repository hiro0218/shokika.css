const cssString = `/*! shokika.css v1.4.1 | MIT License | github.com/hiro0218/shokika.css/ */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

html:focus-within {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
figure,
blockquote,
dl,
dd,
button,
input,
select {
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}

b,
strong {
  font-weight: bolder;
}

small {
  font-size: 80%;
}

abbr[title] {
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
  cursor: help;
  text-decoration-skip-ink: none;
}

ol,
ul {
  padding: 0;
  list-style: none;
}

pre,
code,
kbd,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

img,
video,
picture {
  max-width: 100%;
  height: auto;
}

input,
button,
textarea,
select {
  font: inherit;
  line-height: 1.5;
}

iframe {
  border: 0;
}

table {
  border-spacing: 0;
  border-collapse: collapse;
}

td,
th {
  padding: 0;
}

dt {
  font-weight: bold;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

option {
  padding: 0;
}

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
}

[type='search'] {
  -webkit-appearance: textfield;
}

[tabindex='0'],
a[href],
button,
[type='button'],
[type='reset'],
[type='submit'],
[role='button'],
label,
select,
summary {
  cursor: pointer;
}

[tabindex='0'],
a[href],
button,
input,
label,
select,
textarea,
summary {
  touch-action: manipulation;
}

[aria-busy='true' i] {
  cursor: progress;
}

[aria-controls] {
  cursor: pointer;
}

[aria-disabled='true' i],
[disabled] {
  cursor: not-allowed;
}

@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    transition-duration: 0s !important;
    transition-delay: 0s !important;
    animation-duration: 0s !important;
    animation-delay: 0s !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
  }
}
`;
export default cssString;