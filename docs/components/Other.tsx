import Heading from './ui/Heading';

const Other = () => {
  return (
    <div className="content-wrapper">
      <Heading title="Other Elements" />

      <h4 className="content-sub-heading">Table</h4>
      <div className="playground">
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
      </div>

      <h4 className="content-sub-heading">Details</h4>
      <div className="playground">
        <details>
          <summary>Summary</summary>
          <p>Paragraph</p>
        </details>
      </div>
    </div>
  );
};

export default Other;
