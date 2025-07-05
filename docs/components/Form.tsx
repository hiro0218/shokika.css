import Heading from './ui/Heading';
import { Playground, PlaygroundItem } from './ui/Playground';

const Form = () => {
  return (
    <div className="content-wrapper">
      <Heading title="Form" id="form" level={3} />

      <h4 className="content-sub-heading">Button</h4>
      <Playground>
        <PlaygroundItem>
          <div className="content-list">
            <div className="content-list__item">
              <button type="button">Button</button>
            </div>
            <div className="content-list__item">
              <button type="button" disabled>
                Button Disabled
              </button>
            </div>
          </div>
        </PlaygroundItem>
        <PlaygroundItem>
          <div className="content-list">
            <div className="content-list__item">
              <button type="submit">Submit</button>
            </div>
            <div className="content-list__item">
              <button type="submit" disabled>
                Submit Disabled
              </button>
            </div>
          </div>
        </PlaygroundItem>
        <PlaygroundItem>
          <div className="content-list">
            <div className="content-list__item">
              <button type="reset">Reset</button>
            </div>
            <div className="content-list__item">
              <button type="reset" disabled>
                Reset Disabled
              </button>
            </div>
          </div>
        </PlaygroundItem>
        <PlaygroundItem>
          <div className="content-list">
            <div className="content-list__item">
              <input type="button" defaultValue="Input Button" />
            </div>
            <div className="content-list__item">
              <input type="button" defaultValue="Input Button Disabled" disabled />
            </div>
          </div>
        </PlaygroundItem>
      </Playground>

      <h4 className="content-sub-heading">Input</h4>
      <Playground>
        <PlaygroundItem>
          <div className="content-list">
            <div className="content-list__item">
              <input type="text" placeholder="Text" />
            </div>
            <div className="content-list__item">
              <input type="text" placeholder="Disabled" disabled />
            </div>
            <div className="content-list__item">
              <input type="text" defaultValue="Readonly" placeholder="Readonly" readOnly />
            </div>
          </div>
        </PlaygroundItem>
        <PlaygroundItem>
          <div className="content-list">
            <div className="content-list__item">
              <input type="password" placeholder="Password" />
            </div>
            <div className="content-list__item">
              <input type="password" placeholder="Disabled" disabled />
            </div>
          </div>
        </PlaygroundItem>
        <PlaygroundItem>
          <div className="content-list">
            <div className="content-list__item">
              <input type="search" placeholder="Search" />
            </div>
            <div className="content-list__item">
              <input type="search" placeholder="Disabled" disabled />
            </div>
          </div>
        </PlaygroundItem>
        <PlaygroundItem>
          <div className="content-list">
            <div className="content-list__item">
              <input type="number" placeholder="Number" />
            </div>
            <div className="content-list__item">
              <input type="number" placeholder="Number" disabled />
            </div>
          </div>
        </PlaygroundItem>
        <PlaygroundItem>
          <div className="content-list">
            <div className="content-list__item">
              <input type="email" placeholder="Email" />
            </div>
            <div className="content-list__item">
              <input type="email" placeholder="Email" disabled />
            </div>
          </div>
        </PlaygroundItem>
        <PlaygroundItem>
          <div className="content-list">
            <div className="content-list__item">
              <input type="url" placeholder="URL" />
            </div>
            <div className="content-list__item">
              <input type="url" placeholder="URL" disabled />
            </div>
          </div>
        </PlaygroundItem>
        <PlaygroundItem>
          <div className="content-list">
            <div className="content-list__item">
              <input type="tel" placeholder="Tel" />
            </div>
            <div className="content-list__item">
              <input type="tel" placeholder="Tel" disabled />
            </div>
          </div>
        </PlaygroundItem>

        <PlaygroundItem>
          <div className="content-list">
            <div className="content-list__item">
              <input type="datetime-local" placeholder="Datetime Local" defaultValue="2021-01-01T10:10:00" />
            </div>
            <div className="content-list__item">
              <input type="datetime-local" placeholder="Datetime Local" defaultValue="2021-01-01T10:10:00" disabled />
            </div>
          </div>
        </PlaygroundItem>
        <PlaygroundItem>
          <div className="content-list">
            <div className="content-list__item">
              <input type="date" placeholder="Date" defaultValue="2021-01-01" />
            </div>
            <div className="content-list__item">
              <input type="date" placeholder="Date" defaultValue="2021-01-01" disabled />
            </div>
          </div>
        </PlaygroundItem>
        <PlaygroundItem>
          <div className="content-list">
            <div className="content-list__item">
              <input type="time" placeholder="Time" defaultValue="10:10:00" />
            </div>
            <div className="content-list__item">
              <input type="time" placeholder="Time" defaultValue="10:10:00" disabled />
            </div>
          </div>
        </PlaygroundItem>
        <PlaygroundItem>
          <div className="content-list">
            <div className="content-list__item">
              <input type="file" aria-label="input type[file] sample" />
            </div>
            <div className="content-list__item">
              <input type="file" aria-label="input type[file] sample" disabled />
            </div>
          </div>
        </PlaygroundItem>
        <PlaygroundItem>
          <div className="content-list">
            <div className="content-list__item">
              <input type="color" aria-label="input type[color] sample" />
            </div>
            <div className="content-list__item">
              <input type="color" aria-label="input type[color] sample" disabled />
            </div>
          </div>
        </PlaygroundItem>
        <PlaygroundItem>
          <div className="content-list">
            <div className="content-list__item">
              <input type="range" aria-label="input type[range] sample" />
            </div>
            <div className="content-list__item">
              <input type="range" aria-label="input type[range] sample" disabled />
            </div>
          </div>
        </PlaygroundItem>
      </Playground>

      <h4 className="content-sub-heading">Checkbox</h4>
      <Playground>
        <div className="content-list">
          <div className="content-list__item">
            <label>
              <input type="checkbox" />
              <span> One fuji</span>
            </label>
          </div>
          <div className="content-list__item">
            <label>
              <input type="checkbox" defaultChecked />
              <span> Two eagles</span>
            </label>
          </div>
          <div className="content-list__item">
            <label>
              <input type="checkbox" disabled />
              <span> Three eggplants</span>
            </label>
          </div>
        </div>
      </Playground>

      <h4 className="content-sub-heading">Radio</h4>
      <Playground>
        <div className="content-list">
          <div className="content-list__item">
            <label>
              <input type="radio" name="radio-1" defaultChecked />
              <span> One fuji</span>
            </label>
          </div>
          <div className="content-list__item">
            <label>
              <input type="radio" name="radio-1" />
              <span> Two eagles</span>
            </label>
          </div>
          <div className="content-list__item">
            <label>
              <input type="radio" name="radio-1" disabled />
              <span> Three eggplants</span>
            </label>
          </div>
        </div>
      </Playground>

      <h4 className="content-sub-heading">Textarea</h4>
      <Playground>
        <div className="content-list">
          <div className="content-list__item">
            <textarea placeholder="Textarea"></textarea>
          </div>
          <div className="content-list__item">
            <textarea placeholder="Textarea" disabled></textarea>
          </div>
        </div>
      </Playground>

      <h4 className="content-sub-heading">Select</h4>
      <Playground>
        <PlaygroundItem>
          <div className="content-list">
            <div className="content-list__item">
              <select aria-label="select sample">
                <option>One fuji</option>
                <option>Two eagles</option>
                <option>Three eggplants</option>
              </select>
            </div>
            <div className="content-list__item">
              <select aria-label="select sample" disabled>
                <option>One fuji</option>
                <option>Two eagles</option>
                <option>Three eggplants</option>
              </select>
            </div>
          </div>
        </PlaygroundItem>

        <PlaygroundItem>
          <div className="content-list">
            <div className="content-list__item">
              <select aria-label="select sample" multiple>
                <option>One fuji</option>
                <option>Two eagles</option>
                <option>Three eggplants</option>
              </select>
            </div>
            <div className="content-list__item">
              <select aria-label="select sample" multiple disabled>
                <option>One fuji</option>
                <option>Two eagles</option>
                <option>Three eggplants</option>
              </select>
            </div>
          </div>
        </PlaygroundItem>

        <PlaygroundItem>
          <div className="content-list">
            <div className="content-list__item">
              <select aria-label="select sample">
                <optgroup label="1st group">
                  <option>One fuji</option>
                  <option>Two eagles</option>
                  <option>Three eggplants</option>
                </optgroup>
                <optgroup label="2nd group">
                  <option>One fuji</option>
                  <option>Two eagles</option>
                  <option>Three eggplants</option>
                </optgroup>
              </select>
            </div>
            <div className="content-list__item">
              <select aria-label="select sample" disabled>
                <optgroup label="1st group">
                  <option>One fuji</option>
                  <option>Two eagles</option>
                  <option>Three eggplants</option>
                </optgroup>
                <optgroup label="2nd group">
                  <option>One fuji</option>
                  <option>Two eagles</option>
                  <option>Three eggplants</option>
                </optgroup>
              </select>
            </div>
          </div>
        </PlaygroundItem>

        <PlaygroundItem>
          <div className="content-list">
            <div className="content-list__item">
              <select aria-label="select sample" multiple>
                <optgroup label="1st group">
                  <option>One fuji</option>
                  <option>Two eagles</option>
                  <option>Three eggplants</option>
                </optgroup>
                <optgroup label="2nd group">
                  <option>One fuji</option>
                  <option>Two eagles</option>
                  <option>Three eggplants</option>
                </optgroup>
              </select>
            </div>
            <div className="content-list__item">
              <select aria-label="select sample" aria-disabled="true" multiple disabled>
                <optgroup label="1st group">
                  <option>One fuji</option>
                  <option>Two eagles</option>
                  <option>Three eggplants</option>
                </optgroup>
                <optgroup label="2nd group">
                  <option>One fuji</option>
                  <option>Two eagles</option>
                  <option>Three eggplants</option>
                </optgroup>
              </select>
            </div>
          </div>
        </PlaygroundItem>
      </Playground>

      <h4 className="content-sub-heading">Fieldset and Legend</h4>
      <Playground>
        <fieldset>
          <legend>Choose your favorite monster</legend>
          <div className="content-list">
            <div className="content-list__item">
              <label>
                <input type="radio" name="monster" defaultChecked />
                <span> Kraken</span>
              </label>
            </div>
            <div className="content-list__item">
              <label>
                <input type="radio" name="monster" />
                <span> Sasquatch</span>
              </label>
            </div>
            <div className="content-list__item">
              <label>
                <input type="radio" name="monster" />
                <span> Mothman</span>
              </label>
            </div>
          </div>
        </fieldset>
      </Playground>

      <h4 className="content-sub-heading">Datalist</h4>
      <Playground>
        <div className="content-list">
          <div className="content-list__item">
            <label htmlFor="ice-cream-choice">Choose a flavor:</label>
            <input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />
            <datalist id="ice-cream-flavors">
              <option value="Chocolate" />
              <option value="Coconut" />
              <option value="Mint" />
              <option value="Strawberry" />
              <option value="Vanilla" />
            </datalist>
          </div>
        </div>
      </Playground>

      <h4 className="content-sub-heading">Progress</h4>
      <Playground>
        <div className="content-list">
          <div className="content-list__item">
            <label htmlFor="file">File progress:</label>
            <progress id="file" max="100" value="70">
              70%
            </progress>
          </div>
        </div>
      </Playground>

      <h4 className="content-sub-heading">Meter</h4>
      <Playground>
        <div className="content-list">
          <div className="content-list__item">
            <label htmlFor="fuel">Fuel level:</label>
            <meter id="fuel" min="0" max="100" low="33" high="66" optimum="80" value="50">
              at 50/100
            </meter>
          </div>
        </div>
      </Playground>

      <h4 className="content-sub-heading">Output</h4>
      <Playground>
        <form
          onInput={(e) => {
            const target = e.target as HTMLInputElement;
            const form = target.form as HTMLFormElement | null;
            const output = form?.querySelector('output') as HTMLOutputElement | null;
            if (form && output) {
              const a = form.elements.namedItem('a') as HTMLInputElement | null;
              const b = form.elements.namedItem('b') as HTMLInputElement | null;
              if (a && b) {
                output.value = `Result: ${parseInt(a.value) + parseInt(b.value)}`;
              }
            }
          }}
        >
          <div className="content-list">
            <div className="content-list__item">
              <input type="number" name="a" defaultValue="10" />
            </div>
            <div className="content-list__item">
              <span>+</span>
            </div>
            <div className="content-list__item">
              <input type="number" name="b" defaultValue="10" />
            </div>
            <div className="content-list__item">
              <output name="result">Result: 20</output>
            </div>
          </div>
        </form>
      </Playground>
    </div>
  );
};

export default Form;
