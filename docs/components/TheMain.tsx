import Text from './Text';
import Inline from './Inline';
import Form from './Form';
import Image from './Image';
import Other from './Other';
import Heading from './ui/Heading';

const TheMain = () => {
  return (
    <main className="main-content">
      <section id="installation" className="section-container">
        <Heading title="Installation" level={2} id="installation" />
        <div className="content-wrapper">
          <Heading title="npm" id="npm" level={3} />
          <pre className="install-content__preformatted">
            <code>npm install --save-dev shokika.css</code>
          </pre>
        </div>
        <div className="content-wrapper">
          <Heading title="CDN" id="cdn" level={3} />
          <pre className="install-content__preformatted">
            <code>https://unpkg.com/shokika.css@latest/dist/shokika.min.css</code>
          </pre>
        </div>
      </section>

      <section id="example" className="section-container">
        <Heading title="Example" level={2} id="example" />
        <div id="text">
          <Text />
        </div>
        <div id="inline">
          <Inline />
        </div>
        <div id="form">
          <Form />
        </div>
        <div id="image">
          <Image />
        </div>
        <div id="other">
          <Other />
        </div>
      </section>
    </main>
  );
};

export default TheMain;
