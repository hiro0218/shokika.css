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
              <th colSpan={2}>The table header</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The table body</td>
              <td>with two columns</td>
            </tr>
          </tbody>
        </table>
      </Playground>

      <h4 className="content-sub-heading">Details</h4>
      <Playground>
        <details>
          <summary>Summary</summary>
          <p>Paragraph</p>
        </details>
      </Playground>
    </div>
  );
};

export default Other;
