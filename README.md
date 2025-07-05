![shokika.css image](https://user-images.githubusercontent.com/3617124/121719822-efa52600-cb1d-11eb-952d-076fee025521.png)

# shokika.css

> **Zero-hassle CSS reset for modern web development**

**shokika.css** is a lightweight, modern CSS reset library that eliminates browser inconsistencies and provides a clean foundation for your web projects. Built with developer experience in mind, it offers consistent styling across all modern browsers while maintaining simplicity and performance.

> **Note**: "shokika" (初期化) means "initialize" in Japanese - perfectly capturing what this library does for your CSS.

## Why Choose shokika.css?

- **Lightweight** - Small file size that won't slow down your site
- **Modern** - Built for contemporary web standards
- **Consistent** - Uniform styling across all modern browsers
- **Easy Integration** - Works with any CSS framework or build tool
- **Production Ready** - Reliable foundation for your projects

## Quick Start

Get up and running in seconds! Choose your preferred installation method:

### Package Managers

**npm**

```bash
npm install shokika.css
```

**Yarn**

```bash
yarn add shokika.css
```

**pnpm**

```bash
pnpm add shokika.css
```

### CDN (Fastest Setup)

```html
<link rel="stylesheet" href="https://unpkg.com/shokika.css@latest/dist/shokika.min.css" />
```

Or use the specific version for production:

```html
<link rel="stylesheet" href="https://unpkg.com/shokika.css@[version]/dist/shokika.min.css" />
```

## Usage

### Basic Import

```scss
@import '~shokika.css';
```

### Advanced: Using CSS Cascade Layers (Recommended)

For better control over CSS specificity and loading order, leverage modern [CSS Cascade Layers](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Cascade_layers):

```css
@layer reset, tools, base, components, utilities;

@import 'shokika.css' layer(reset);
```

This ensures your reset styles are properly layered and won't interfere with your component styles.

### Direct HTML Link

```html
<link rel="stylesheet" href="https://unpkg.com/shokika.css@latest/dist/shokika.min.css" />
```

## CSS-in-JS Integration

Perfect for modern React applications! Works seamlessly with popular CSS-in-JS libraries:

### Emotion

```jsx
import { css, Global } from '@emotion/react';
import resetCSS from 'shokika.css/dist/string';

const globalStyle = css`
  ${resetCSS}
`;

export const CSSReset = () => <Global styles={globalStyle} />;
```

### Styled Components

```jsx
import styled, { createGlobalStyle } from 'styled-components';
import resetCSS from 'shokika.css/dist/string';

const GlobalStyle = createGlobalStyle`
  ${resetCSS}
`;
```

## Available Files

Choose the right file for your needs:

| File              | Description              | Use Case                     |
| ----------------- | ------------------------ | ---------------------------- |
| `shokika.css`     | Raw, unminified CSS      | Development & debugging      |
| `shokika.min.css` | Minified CSS             | **Production (recommended)** |
| `dist/string`     | CSS as JavaScript string | CSS-in-JS libraries          |

## Browser Support

**Modern browsers only** - Chrome, Firefox, Safari, and Edge (latest versions).

> **Note**: Legacy browsers like IE11 are not supported. This allows us to use modern CSS features and keep the library lightweight.

---

## Contributing

We welcome contributions! Whether it's bug reports, feature requests, or pull requests, every contribution helps make shokika.css better.

## License

MIT License - see [LICENSE](LICENSE) for details.

## Show Your Support

If shokika.css helped your project, consider giving it a star! It helps others discover this tool and motivates continued development.

---

<div align="center">
  <sub>Built with ❤️ for the web development community</sub>
</div>
