const React = require('react');
const ReactDOM = require('react-dom');

const BlocksReact = require('../../react-index.js');

const ButtonPrimary = BlocksReact.Buttons.ButtonPrimary;
const ButtonSmallPrimary = BlocksReact.Buttons.ButtonSmallPrimary;
const ButtonSecondary = BlocksReact.Buttons.ButtonSecondary;
const ButtonSmallSecondary = BlocksReact.Buttons.ButtonSmallSecondary;

const Checkbox = BlocksReact.Input.Checkbox;
const RadioButtonGroup = BlocksReact.Input.RadioButtonGroup;
const TextField = BlocksReact.Input.TextField;
const Toggle = BlocksReact.Input.Toggle;

const Dropdown = BlocksReact.Dropdowns.Dropdown;

const SuccessAlert = BlocksReact.Alerts.SuccessAlert;
const InformationalAlert = BlocksReact.Alerts.InformationalAlert;
const WarningAlert = BlocksReact.Alerts.WarningAlert;
const ErrorAlert = BlocksReact.Alerts.ErrorAlert;

const AccordionSection = BlocksReact.Accordion;

const Breadcrumbs = BlocksReact.Progress.Breadcrumbs;
const ProgressDots = BlocksReact.Progress.ProgressDots;

const RadioTabs = BlocksReact.Tabs.RadioTabs;
const LinkTabs = BlocksReact.Tabs.LinkTabs;

const SortableList = BlocksReact.SortableList;


const INVALID_VALUE = 'Wrong';

class Preview extends React.Component {
  constructor() {
    super();

    this.state = {
      invalidInputValue: INVALID_VALUE
    };
  }

  render() {
    return (
      <div>
        { /* BUTTONS */ }
        <div className="l-flex-vertical doc-section">
          <h4>Buttons</h4>
          <div className="l-flex-vertical">
            <div className="l-flex-horizontal">
              <span className="doc-state-title caption">
                Primary Button
              </span>
              <div className="doc-state-content">
                <ButtonPrimary
                  text="Primary button"
                />
              </div>
              <span className="doc-state-title caption">
                Secondary Button
              </span>
              <div className="doc-state-content">
                <ButtonSecondary
                  text="Secondary button"
                />
              </div>
            </div>
            <div className="l-flex-horizontal">
              <span className="doc-state-title caption">
                Primary Button Disabled
              </span>
              <div className="doc-state-content">
                <ButtonPrimary
                  text="Primary button disabled"
                  isDisabled
                />
              </div>
              <span className="doc-state-title caption">
                Secondary Button Disabled
              </span>
              <div className="doc-state-content">
                <ButtonSecondary
                  text="Secondary button disabled"
                  isDisabled
                />
              </div>
            </div>
            <div className="l-flex-horizontal">
              <span className="doc-state-title caption">
                Primary Button small
              </span>
              <div className="doc-state-content">
                <ButtonSmallPrimary
                  text="Primary button small"
                />
              </div>
              <span className="doc-state-title caption">
                Secondary Button small
              </span>
              <div className="doc-state-content">
                <ButtonSmallSecondary
                  text="Secondary button small"
                />
              </div>
            </div>
          </div>
        </div>

        { /* CHECKBOXES */ }
        <div className="l-flex-vertical doc-section">
          <h4>Checkboxes</h4>
          <div className="l-flex-vertical">
            <div className="l-flex-horizontal">
              <span className="doc-state-title caption">
                Unselected
              </span>
              <div className="doc-state-content">
                <Checkbox text="Unselected" />
              </div>
            </div>
            <div className="l-flex-horizontal">
              <span className="doc-state-title caption">
                Selected
              </span>
              <div className="doc-state-content">
                <Checkbox text="Selected" isChecked />
              </div>
            </div>
            <div className="l-flex-horizontal">
              <span className="doc-state-title caption">
                Unselected, Disabled
              </span>
              <div className="doc-state-content">
                <Checkbox text="Unselected, Disabled" isDisabled />
              </div>
            </div>
            <div className="l-flex-horizontal">
              <span className="doc-state-title caption">
                Selected, Disabled
              </span>
              <div className="doc-state-content">
                <Checkbox text="Selected, Disabled" isDisabled isChecked />
              </div>
            </div>
          </div>
        </div>

        { /* RADIO BUTTONS */ }
        <div className="l-flex-vertical doc-section">
          <h4>Radio Buttons</h4>
          <div className="l-flex-vertical">
            <div className="l-flex-horizontal">
              <span className="doc-state-title caption">
                Unselected
              </span>
              <div className="doc-state-content">
                <RadioButtonGroup
                  name="radio-1"
                  options={['Unselected', 'Unselected 2']}
                  onChange={() => {}}
                />
              </div>
            </div>
            <div className="l-flex-horizontal">
              <span className="doc-state-title caption">
                Selected
              </span>
              <div className="doc-state-content">
                <RadioButtonGroup
                  name="radio-2"
                  options={['Selected', 'Selected 2']}
                  checkedIndex={0}
                  onChange={() => {}}
                />
              </div>
            </div>
            <div className="l-flex-horizontal">
              <span className="doc-state-title caption">
                Unselected, Disabled
              </span>
              <div className="doc-state-content">
                <RadioButtonGroup
                  name="radio-3"
                  options={['Unselected, Disabled']}
                  isDisabled
                  onChange={() => {}}
                />
              </div>
            </div>
            <div className="l-flex-horizontal">
              <span className="doc-state-title caption">
                Selected, Disabled
              </span>
              <div className="doc-state-content">
                <RadioButtonGroup
                  name="radio-4"
                  options={['Selected, Disabled']}
                  isDisabled
                  checkedIndex={0}
                  onChange={() => {}}
                />
              </div>
            </div>
          </div>
        </div>

        { /* TEXT FIELDS */ }
        <div className="l-flex-vertical doc-section">
          <h4>Text Fields</h4>
          <div className="l-flex-vertical">
            <div className="l-flex-horizontal">
              <span className="doc-state-title caption">
                Default
              </span>
              <div className="doc-state-content">
                <TextField
                  label="Text input label"
                  placeholder="e.g. Text input"
                />
              </div>
            </div>
            <div className="l-flex-horizontal">
              <span className="doc-state-title caption">
                Disabled
              </span>
              <div className="doc-state-content">
                <TextField
                  label="Text input label"
                  placeholder="e.g. Text input"
                  isDisabled
                />
              </div>
            </div>
            <div className="l-flex-horizontal">
              <span className="doc-state-title caption">
                Idle, Filled
              </span>
              <div className="doc-state-content">
                <TextField
                  label="Text input label"
                  value="More than a placeholder"
                  onChange={() => {}}
                />
              </div>
            </div>
            <div className="l-flex-horizontal">
              <span className="doc-state-title caption">
                Validation
              </span>
              <div className="doc-state-content">
                <TextField
                  label="Text input label"
                  isValid={value => { return value !== INVALID_VALUE; }}
                  invalidErrorMessage={`This text is invalid. Enter any value other than ${INVALID_VALUE} to make it valid.`}
                  value={this.state.invalidInputValue}
                  onChange={evt => this.setState({ invalidInputValue: evt.target.value })}
                />
              </div>
            </div>
            <div className="l-flex-horizontal">
              <span className="doc-state-title caption">
                Prefix/Suffix
              </span>
              <div className="doc-state-content">
                <TextField
                  label="Text input label"
                  prefix="$"
                  suffix="USD"
                />
              </div>
            </div>
          </div>
        </div>

        { /* DROPDOWNS */ }
        <div className="l-flex-vertical doc-section">
          <h4>Dropdowns</h4>
          <div className="l-flex-vertical">
            <div className="l-flex-horizontal">
              <span className="doc-state-title caption">
                Default
              </span>
              <div className="doc-state-content">
                <Dropdown
                  text="Choose an option"
                  options={
                    [
                      { value: 'option1', text: 'One option' },
                      { value: 'option2', text: 'Another option' },
                      { value: 'option3', text: 'Best option' }
                    ]
                  }
                />
              </div>
            </div>
            <div className="l-flex-horizontal">
              <span className="doc-state-title caption">
                Disabled
              </span>
              <div className="doc-state-content">
                <Dropdown
                  text="Choose an option"
                  isDisabled
                  options={
                    [
                      { value: 'option1', text: 'One option' },
                      { value: 'option2', text: 'Another option' },
                      { value: 'option3', text: 'Best option' }
                    ]
                  }
                />
              </div>
            </div>
          </div>
        </div>

        { /* ALERTS */ }
        <div className="l-flex-vertical doc-section">
          <h4>Alerts</h4>
          <SuccessAlert
            message="Additional information or directions go here. Brevity is the soul of wit, however, text may wrap to another line in the off chance that we want the user hooked on phonics."
          />
          <InformationalAlert
            message="Additional information or directions go here. We may decide this particular information is very important and remove the option to close it. If users can’t get rid of it, maybe they’ll read it."
          />
          <WarningAlert
            message="An explanation of the warning goes here."
          />
          <ErrorAlert
            message="An explanation of the error goes here. This should be the scariest looking banner — but not too scary. Maybe we’ll choose to add a button on this banner."
          />
        </div>

        <p>NOTE: The following components are less complete but are included here for preview purposes.</p>

        { /* ACCORDIONS */ }
        <div className="l-flex-vertical doc-section">
          <h4>Accordions</h4>
          <div>
            <AccordionSection
              trigger={<span className="subtitle">Item 1</span>}
            >
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
            </AccordionSection>
            <AccordionSection
              trigger={<span className="subtitle">Item 2</span>}
            >
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
            </AccordionSection>
            <AccordionSection
              trigger={<span className="subtitle">Item 3</span>}
            >
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
            </AccordionSection>
          </div>
        </div>

        { /* PROGRESS */ }
        <div className="l-flex-vertical doc-section">
          <h4>Progress</h4>
          <ProgressDots
            name="design-page-progress"
            numSteps={7}
            currentStepIdx={4}
          />
          <Breadcrumbs
            breadcrumbs={
              [
                {
                  text: 'Breadcrumb 1',
                  href: '#'
                },
                {
                  text: 'Breadcrumb 2',
                  href: '#'
                },
                {
                  text: 'Breadcrumb 3',
                  href: '#'
                },
                {
                  text: 'Breadcrumb 4',
                  href: '#'
                },
                {
                  text: 'Breadcrumb 5',
                  href: '#'
                }
              ]
            }
          />
        </div>

        { /* TOGGLES */ }
        <div className="l-flex-vertical doc-section">
          <h4>Toggles</h4>
          <div>
            <Toggle
              name="design-page-toggle"
              options={
                [
                  { text: 'Option 1', isChecked: true },
                  { text: 'Option 2' },
                  { text: 'Option 3' }
                ]
              }
            />
            <Toggle
              name="design-page-toggle-disabled"
              options={
                [
                  { text: 'I am', isChecked: true },
                  { text: 'a disabled' },
                  { text: 'toggle' }
                ]
              }
              isDisabled
            />
          </div>
        </div>

        { /* TABS */ }
        <div className="l-flex-vertical doc-section">
          <h4>Tabs</h4>
          <div>
            <p>Horizontal tabs</p>
            <RadioTabs
              tabs={
                [
                  'Tab 1', 'Tab 2', 'Tab 3', 'Tab 4'
                ]
              }
              onChange={() => {}}
            />
          </div>
          <div>
            <p>Disabled horizontal tabs</p>
            <RadioTabs
              tabs={
                [
                  'Disabled Tab 1', 'Disabled Tab 2', 'Disabled Tab 3', 'Disabled Tab 4'
                ]
              }
              isDisabled
              onChange={() => {}}
            />
          </div>
          <div>
            <p>Vertical tabs</p>
            <RadioTabs
              tabs={
                [
                  'Tab 1', 'Tab 2', 'Tab 3', 'Tab 4'
                ]
              }
              isVertical
              onChange={() => {}}
            />
          </div>
          <div>
            <p>Link tabs</p>
            <LinkTabs
              tabs={
                [
                  { name: 'Tab 1', href: '#' },
                  { name: 'Tab 2', href: '#' },
                  { name: 'Tab 3', href: '#' },
                  { name: 'Tab 4', href: '#' }
                ]
              }
            />
          </div>
        </div>

        { /* SORTABLE LIST */ }
        <div className="l-flex-vertical doc-section">
          <h4>Sortable List</h4>
          <div>
            <SortableList>
              <span>Item 1</span>
              <span>Item 2</span>
              <span>Item 3</span>
              <span>Item 4</span>
              <span>Item 5</span>
              <span>Item 6</span>
              <span>Item 7</span>
            </SortableList>
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');

ReactDOM.render(<Preview />, rootElement);