import Heading from './ui/Heading';
import { Playground } from './ui/Playground';

const Inline = () => {
  return (
    <div className="content-wrapper">
      <Heading title="Inline" id="inline" level={3} />
      <Playground>
        <div className="playground__item">
          This is <a href="#">Anchor Link</a>.
        </div>
        <div className="playground__item">
          <mark>Reset CSS</mark> is used to maintain style consistency across browsers.
        </div>
        <div className="playground__item">
          <s>Legacy browser support has ended.</s>
        </div>
        <div className="playground__item">
          You could use this element to highlight <u>spelling</u> mistakes, so the writer can <u>correct</u> them.
        </div>
        <div className="playground__item">
          <small>This line of text is meant to be treated as fine print.</small>
        </div>
        <div className="playground__item">
          By using reset CSS, you can achieve <strong>consistent styling</strong> across different browsers.
        </div>
        <div className="playground__item">
          Get out of bed <em>now</em>!
        </div>
        <div className="playground__item">
          You can use <abbr title="Cascading Style Sheets">CSS</abbr> to style your{' '}
          <abbr title="HyperText Markup Language">HTML</abbr>.
        </div>
        <div className="playground__item">
          Modern web development often uses <abbr title="Application Programming Interface">API</abbr>s and{' '}
          <abbr title="Single Page Application">SPA</abbr> frameworks.
        </div>
        <div className="playground__item">
          <abbr title="Search Engine Optimization">SEO</abbr> and <abbr title="User Experience">UX</abbr> are crucial
          for web success.
        </div>
        <div className="playground__item">
          <samp>Terminal not found, Press F1 to continue</samp>
        </div>
        <div className="playground__item">
          Please press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to re-render an MDN page.
        </div>
        <div className="playground__item">
          Run <code>npm install --save-dev shokika.css</code> to install.
        </div>
      </Playground>
    </div>
  );
};

export default Inline;
