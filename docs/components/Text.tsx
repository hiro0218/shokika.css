import Heading from './ui/Heading';
import { Playground } from './ui/Playground';

const Text = () => {
  return (
    <div className="content-wrapper">
      <Heading title="Text" id="text" level={3} />

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
          <dt>Beast of Bodmin</dt>
          <dd>A large feline inhabiting Bodmin Moor.</dd>

          <dt>Morgawr</dt>
          <dd>A sea serpent.</dd>

          <dt>Owlman</dt>
          <dd>A giant owl-like creature.</dd>
        </dl>
      </Playground>

      <h4 className="content-sub-heading">Horizontal Rule</h4>
      <Playground>
        <p>This is the first paragraph of text.</p>
        <hr />
        <p>This is the second paragraph of text.</p>
      </Playground>
    </div>
  );
};

export default Text;
