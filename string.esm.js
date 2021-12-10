module.exports="/*! shokika.css v1.6.0 | MIT License | github.com/hiro0218/shokika.css/ */\n:where(*, *::before, *::after) {\n  box-sizing: border-box;\n}\n\n:where(html) {\n  height: 100%;\n  font-family: sans-serif;\n  line-height: 1.5;\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n:where(html:focus-within) {\n  scroll-behavior: smooth;\n}\n\n:where(body) {\n  height: 100%;\n  text-rendering: optimizeSpeed;\n}\n\n:where(body, h1, h2, h3, h4, h5, h6, p, figure, blockquote, dl, dd, ol, ul, button, input, select) {\n  margin: 0;\n}\n\n:where(h1, h2, h3, h4, h5, h6) {\n  font-size: 100%;\n  font-weight: normal;\n}\n\n:where(b, strong) {\n  font-weight: bolder;\n}\n\n:where(small) {\n  font-size: 80%;\n}\n\n:where(ol, ul) {\n  padding: 0;\n  list-style: none;\n}\n\n:where(pre, code, kbd, samp) {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n:where(img, video, picture) {\n  max-width: 100%;\n  height: auto;\n}\n\n:where(input, button, textarea, select) {\n  font: inherit;\n  line-height: 1.5;\n}\n\n:where(iframe) {\n  border: 0;\n}\n\n:where(table) {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n\n:where(td, th) {\n  padding: 0;\n}\n\n:where(dt) {\n  font-weight: bold;\n}\n\n:where(hr) {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible;\n}\n\n:where(option) {\n  padding: 0;\n}\n\n:where(button, [type='button'], [type='reset'], [type='submit']) {\n  -webkit-appearance: button;\n}\n\n:where(abbr[title]) {\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n  cursor: help;\n  text-decoration-skip-ink: none;\n}\n\n:where([type='search']) {\n  -webkit-appearance: textfield;\n}\n\n:where([tabindex='0'], a[href], button, [type='button'], [type='reset'], [type='submit'], [role='button'], label, select, summary) {\n  cursor: pointer;\n}\n\n:where([tabindex='0'], a[href], button, input, label, select, textarea, summary) {\n  touch-action: manipulation;\n}\n\n:where([aria-busy='true' i]) {\n  cursor: progress;\n}\n\n:where([aria-controls]) {\n  cursor: pointer;\n}\n\n:where([aria-disabled='true' i], [disabled]) {\n  cursor: not-allowed;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  :where(html:focus-within) {\n    scroll-behavior: auto;\n  }\n\n  :where(*, *::before, *::after) {\n    transition-duration: 0s !important;\n    transition-delay: 0s !important;\n    animation-duration: 0s !important;\n    animation-delay: 0s !important;\n    animation-iteration-count: 1 !important;\n    scroll-behavior: auto !important;\n  }\n}\n";
//# sourceMappingURL=string.esm.js.map
