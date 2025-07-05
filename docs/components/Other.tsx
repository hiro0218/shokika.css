import Heading from './ui/Heading';
import { Playground } from './ui/Playground';

const Other = () => {
  return (
    <div className="content-wrapper">
      <Heading title="Other Elements" id="other" level={3} />

      <h4 className="content-sub-heading">Table</h4>
      <Playground>
        <table>
          <thead>
            <tr>
              <th>Technology</th>
              <th>Type</th>
              <th>Released</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>React</td>
              <td>Library</td>
              <td>2013</td>
              <td>User Interface</td>
            </tr>
            <tr>
              <td>Vue.js</td>
              <td>Framework</td>
              <td>2014</td>
              <td>Progressive Web Apps</td>
            </tr>
            <tr>
              <td>TypeScript</td>
              <td>Language</td>
              <td>2012</td>
              <td>Type Safety</td>
            </tr>
          </tbody>
        </table>
      </Playground>

      <h4 className="content-sub-heading">Details</h4>
      <Playground>
        <details>
          <summary>CSS Reset vs Normalize</summary>
          <p>
            CSS Reset removes all default browser styling, providing a clean slate for custom styles. Normalize.css
            preserves useful defaults while fixing browser inconsistencies.
          </p>
          <ul>
            <li>Reset: Complete removal of default styles</li>
            <li>Normalize: Consistent baseline across browsers</li>
            <li>Modern approach: Combine both strategies</li>
          </ul>
        </details>
        <details open>
          <summary>Browser Compatibility</summary>
          <p>Modern CSS features and their browser support:</p>
          <ul>
            <li>CSS Grid: Supported in all modern browsers</li>
            <li>Flexbox: Universal support since IE11</li>
            <li>Custom Properties: Supported except IE</li>
          </ul>
        </details>
      </Playground>

      <h4 className="content-sub-heading">Iframe</h4>
      <Playground>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7479757770916!2d139.74285797578673!3d35.658580472594515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bbd9009ec09%3A0x481a93f0d2a409dd!2z5p2x5Lqs44K_44Ov44O8!5e0!3m2!1sja!2sjp!4v1751703790915!5m2!1sja!2sjp"
          width="600"
          height="450"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        >
          Iframe content would appear here
        </iframe>
      </Playground>
    </div>
  );
};

export default Other;
