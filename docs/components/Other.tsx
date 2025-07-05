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
    </div>
  );
};

export default Other;
