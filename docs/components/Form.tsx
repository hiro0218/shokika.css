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
        <PlaygroundItem>
          <div className="content-list">
            <div className="content-list__item">
              <input type="submit" defaultValue="Input Submit" />
            </div>
            <div className="content-list__item">
              <input type="submit" defaultValue="Input Submit Disabled" disabled />
            </div>
          </div>
        </PlaygroundItem>
        <PlaygroundItem>
          <div className="content-list">
            <div className="content-list__item">
              <input type="reset" defaultValue="Input Reset" />
            </div>
            <div className="content-list__item">
              <input type="reset" defaultValue="Input Reset Disabled" disabled />
            </div>
          </div>
        </PlaygroundItem>
        <PlaygroundItem>
          <div className="content-list">
            <div className="content-list__item">
              <input
                type="image"
                src="https://avatars.githubusercontent.com/u/3617124?s=40&v=4"
                alt="Image Button"
                width="40"
                height="40"
              />
            </div>
            <div className="content-list__item">
              <input
                type="image"
                src="https://avatars.githubusercontent.com/u/3617124?s=40&v=4"
                alt="Image Button Disabled"
                width="40"
                height="40"
                disabled
              />
            </div>
          </div>
        </PlaygroundItem>
        <PlaygroundItem>
          <div className="content-list">
            <div className="content-list__item">
              <span
                role="button"
                tabIndex={0}
                style={{
                  padding: '8px 16px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  display: 'inline-block',
                }}
              >
                Role Button
              </span>
            </div>
            <div className="content-list__item">
              <span
                role="button"
                tabIndex={-1}
                aria-disabled="true"
                style={{
                  padding: '8px 16px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  cursor: 'not-allowed',
                  display: 'inline-block',
                  opacity: 0.6,
                }}
              >
                Role Button Disabled
              </span>
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
              <span> Web Design</span>
            </label>
          </div>
          <div className="content-list__item">
            <label>
              <input type="checkbox" defaultChecked />
              <span> Frontend</span>
            </label>
          </div>
          <div className="content-list__item">
            <label>
              <input type="checkbox" disabled />
              <span> Backend</span>
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
              <span> HTML</span>
            </label>
          </div>
          <div className="content-list__item">
            <label>
              <input type="radio" name="radio-1" />
              <span> CSS</span>
            </label>
          </div>
          <div className="content-list__item">
            <label>
              <input type="radio" name="radio-1" disabled />
              <span> JavaScript</span>
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
                <option>React</option>
                <option>Vue</option>
                <option>Angular</option>
              </select>
            </div>
            <div className="content-list__item">
              <select aria-label="select sample" disabled>
                <option>React</option>
                <option>Vue</option>
                <option>Angular</option>
              </select>
            </div>
          </div>
        </PlaygroundItem>

        <PlaygroundItem>
          <div className="content-list">
            <div className="content-list__item">
              <select aria-label="select sample" multiple>
                <option>TypeScript</option>
                <option>JavaScript</option>
                <option>CoffeeScript</option>
              </select>
            </div>
            <div className="content-list__item">
              <select aria-label="select sample" multiple disabled>
                <option>TypeScript</option>
                <option>JavaScript</option>
                <option>CoffeeScript</option>
              </select>
            </div>
          </div>
        </PlaygroundItem>

        <PlaygroundItem>
          <div className="content-list">
            <div className="content-list__item">
              <select aria-label="select sample">
                <optgroup label="Frontend">
                  <option>HTML</option>
                  <option>CSS</option>
                  <option>JavaScript</option>
                </optgroup>
                <optgroup label="Backend">
                  <option>Node.js</option>
                  <option>Python</option>
                  <option>Ruby</option>
                </optgroup>
              </select>
            </div>
            <div className="content-list__item">
              <select aria-label="select sample" disabled>
                <optgroup label="Frontend">
                  <option>HTML</option>
                  <option>CSS</option>
                  <option>JavaScript</option>
                </optgroup>
                <optgroup label="Backend">
                  <option>Node.js</option>
                  <option>Python</option>
                  <option>Ruby</option>
                </optgroup>
              </select>
            </div>
          </div>
        </PlaygroundItem>

        <PlaygroundItem>
          <div className="content-list">
            <div className="content-list__item">
              <select aria-label="select sample" multiple>
                <optgroup label="Languages">
                  <option>HTML</option>
                  <option>CSS</option>
                  <option>JavaScript</option>
                </optgroup>
                <optgroup label="Frameworks">
                  <option>React</option>
                  <option>Vue</option>
                  <option>Angular</option>
                </optgroup>
              </select>
            </div>
            <div className="content-list__item">
              <select aria-label="select sample" aria-disabled="true" multiple disabled>
                <optgroup label="Frontend">
                  <option>HTML</option>
                  <option>CSS</option>
                  <option>JavaScript</option>
                </optgroup>
                <optgroup label="Backend">
                  <option>Node.js</option>
                  <option>Python</option>
                  <option>Ruby</option>
                </optgroup>
              </select>
            </div>
          </div>
        </PlaygroundItem>
      </Playground>

      <h4 className="content-sub-heading">Fieldset and Legend</h4>
      <Playground>
        <fieldset>
          <legend>Choose your preferred development environment</legend>
          <div className="content-list">
            <div className="content-list__item">
              <label>
                <input type="radio" name="monster" defaultChecked />
                <span> VS Code</span>
              </label>
            </div>
            <div className="content-list__item">
              <label>
                <input type="radio" name="monster" />
                <span> WebStorm</span>
              </label>
            </div>
            <div className="content-list__item">
              <label>
                <input type="radio" name="monster" />
                <span> Sublime Text</span>
              </label>
            </div>
          </div>
        </fieldset>
      </Playground>

      <h4 className="content-sub-heading">Datalist</h4>
      <Playground>
        <div className="content-list">
          <div className="content-list__item">
            <label htmlFor="framework-choice">Choose a framework:</label>
            <input list="framework-options" id="framework-choice" name="framework-choice" />
            <datalist id="framework-options">
              <option value="React" />
              <option value="Vue" />
              <option value="Angular" />
              <option value="Svelte" />
              <option value="Next.js" />
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
            <meter id="fuel" min="0" max="100" low={33} high={66} optimum={80} value="50">
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

      <h4 className="content-sub-heading">ARIA Attributes</h4>
      <Playground>
        <div className="content-list">
          <div className="content-list__item">
            <button aria-busy="true">Loading...</button>
          </div>
          <div className="content-list__item">
            <button aria-controls="form-section" aria-expanded="false">
              Toggle Form Section
            </button>
          </div>
          <div className="content-list__item">
            <button aria-disabled="true">Aria Disabled Button</button>
          </div>
          <div className="content-list__item">
            <div role="button" tabIndex={0} aria-label="Custom button with role">
              Custom Role Button
            </div>
          </div>
        </div>
      </Playground>

      <h4 className="content-sub-heading">Form Groups and Layouts</h4>
      <Playground>
        <div className="content-list">
          <div className="content-list__item">
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <label htmlFor="inline-input">Name:</label>
              <input type="text" id="inline-input" style={{ flex: 1 }} />
              <button type="button">Submit</button>
            </div>
          </div>
          <div className="content-list__item">
            <div style={{ display: 'grid', gap: '8px' }}>
              <label htmlFor="grid-input">Address:</label>
              <input type="text" id="grid-input" placeholder="Street address" />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <input type="text" placeholder="City" />
                <input type="text" placeholder="ZIP" />
              </div>
            </div>
          </div>
        </div>
      </Playground>

      <h4 className="content-sub-heading">Form with Labels</h4>
      <Playground>
        <div className="content-list" style={{ flexDirection: 'column' }}>
          <div className="content-list__item">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="content-list__item">
            <label htmlFor="user-email">Email:</label>
            <input type="email" id="user-email" name="email" required />
          </div>
          <div className="content-list__item">
            <label htmlFor="user-age">Age:</label>
            <input type="number" id="user-age" name="age" min="18" max="120" />
          </div>
          <div className="content-list__item">
            <label htmlFor="bio">Bio:</label>
            <textarea id="bio" name="bio" placeholder="Tell us about yourself"></textarea>
          </div>
          <div className="content-list__item">
            <label htmlFor="country">Country:</label>
            <select id="country" name="country">
              <option value="">Select a country</option>
              <option value="jp">Japan</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
            </select>
          </div>
          <div className="content-list__item">
            <button type="submit">Submit Form</button>
          </div>
        </div>
      </Playground>
    </div>
  );
};

export default Form;
