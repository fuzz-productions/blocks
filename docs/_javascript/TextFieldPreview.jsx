const React = require('react');
const ReactDOM = require('react-dom');

const getPreviewComponent = require('./common/getPreviewComponent.jsx');

const TextField = require('../../react/input/TextField.jsx');
const TextFieldWithDropdown = require('../../react/input/TextFieldWithDropdown.jsx');

const INVALID_VALUE = 'Wrong';


class TextFieldPreview extends React.Component {
  constructor() {
    super();

    this.state = {
      invalidInputValue: INVALID_VALUE,
      unitValue: 'ft'
    };

    this.onChangeUnit = this.onChangeUnit.bind(this);
  }

  onChangeUnit(option) {
    this.setState({
      unitValue: option.value
    })
  }

  render() {
    return (
      <div>
        <div className="l-flex-horizontal">
          { getPreviewComponent('Default', <TextField label="Text input label" placeholder="e.g. Text input" />) }
        </div>
        <div className="l-flex-horizontal">
          { getPreviewComponent('Disabled', <TextField label="Text input label" placeholder="e.g. Text input" isDisabled />) }
        </div>
        <div className="l-flex-horizontal">
          { getPreviewComponent('Idle, Filled', <TextField label="Text input label" value="More than a placeholder" onChange={() => {}} />) }
        </div>
        <div className="l-flex-horizontal">
          { getPreviewComponent('Validation',
              <TextField
                label="Text input label"
                isValid={value => { return value !== INVALID_VALUE; }}
                invalidErrorMessage={`This text is invalid. Enter any value other than ${INVALID_VALUE} to make it valid.`}
                value={this.state.invalidInputValue}
                onChange={evt => this.setState({ invalidInputValue: evt.target.value })}
              />
          ) }
        </div>
        <div className="l-flex-horizontal">
          { getPreviewComponent('Prefix/Suffix', <TextField label="Text input label" prefix="$" suffix="USD" />) }
        </div>
        <div className="l-flex-horizontal">
          { getPreviewComponent('Text Field with Dropdown',
              <TextFieldWithDropdown
                textField={{
                  label: "Text input label",
                  placeholder: "100,000"
                }}
                dropdown={{
                  options: [{text: 'ft', value: 'ft'}, {text: 'cm', value: 'cm'}, {text: 'm', value: 'm'}],
                  value: this.state.unitValue,
                  onChange: this.onChangeUnit
                }}
              />
          ) }
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById('react-preview');
ReactDOM.render(<TextFieldPreview />, rootElement);
