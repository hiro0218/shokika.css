import Heading from './ui/Heading';
import { Playground } from './ui/Playground';

interface TextProps {
  id?: string;
}

const Text = ({ id }: TextProps) => {
  return (
    <div className="content-wrapper" id={id}>
      <Heading title="Text" level={3} />

      <h4 className="content-sub-heading">Headings</h4>
      <Playground>
        <h1>heading 1</h1>
        <h2>heading 2</h2>
        <h3>heading 3</h3>
        <h4>heading 4</h4>
        <h5>heading 5</h5>
        <h6>heading 6</h6>
      </Playground>

      <h4 className="content-sub-heading">Paragraph</h4>
      <Playground>
        <p>
          The <code>&lt;p&gt;</code> HTML element represents a paragraph. Paragraphs are usually represented in visual
          media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML
          paragraphs can be any structural grouping of related content, such as images or form fields.
        </p>
      </Playground>

      <h4 className="content-sub-heading">List</h4>
      <Playground>
        <div className="playground__item">
          <ul>
            <li>unordered list</li>
            <li>unordered list</li>
            <li>unordered list</li>
          </ul>
        </div>
        <div className="playground__item">
          <ol>
            <li>ordered list</li>
            <li>ordered list</li>
            <li>ordered list</li>
          </ol>
        </div>
      </Playground>

      <h4 className="content-sub-heading">Blockquote</h4>
      <Playground>
        <blockquote>Our mission is to make cloud computing accessible to everyone.</blockquote>
      </Playground>

      <h4 className="content-sub-heading">Preformatted Text (Code Block)</h4>
      <Playground>
        <pre>
          <code>npm install --save-dev shokika.css</code>
        </pre>
      </Playground>

      <h4 className="content-sub-heading">Description List</h4>
      <Playground>
        <dl>
          <dt>HTML</dt>
          <dd>A markup language for creating web pages and web applications.</dd>

          <dt>CSS</dt>
          <dd>A stylesheet language for styling and laying out web pages.</dd>

          <dt>JavaScript</dt>
          <dd>A programming language for web interactivity and dynamic content.</dd>

          <dt>API</dt>
          <dd>Application Programming Interface - a set of protocols for building software applications.</dd>
        </dl>
      </Playground>

      <h4 className="content-sub-heading">Horizontal Rule</h4>
      <Playground>
        <p>This section covers the basics of web development.</p>
        <hr />
        <p>Next, we'll explore advanced topics and best practices.</p>
      </Playground>
    </div>
  );
};

export default Text;
