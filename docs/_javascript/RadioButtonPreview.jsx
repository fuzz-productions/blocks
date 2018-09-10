const React = require('react');
const ReactDOM = require('react-dom');

const getPreviewComponent = require('./common/getPreviewComponent.jsx');

const RadioButtonGroup = require('../../react/input/RadioButtonGroup.jsx');

const RadioButtonPreview = () => (
  <div>
    <div className="l-flex-horizontal">
      { getPreviewComponent('Unselected',
          <RadioButtonGroup
            name="radio-1"
            options={['Unselected', 'Unselected 2']}
            onChange={() => {}}
          />
      )}
    </div>
    <div className="l-flex-horizontal">
      { getPreviewComponent('Selected',
          <RadioButtonGroup
            name="radio-2"
            options={['Selected', 'Selected 2']}
            checkedIndex={0}
            onChange={() => {}}
          />
      )}
    </div>
    <div className="l-flex-horizontal">
      { getPreviewComponent('Unselected, Disabled',
          <RadioButtonGroup
            name="radio-3"
            options={['Unselected, Disabled']}
            isDisabled
            onChange={() => {}}
          />
      ) }
    </div>
    <div className="l-flex-horizontal">
      { getPreviewComponent('Selected, Disabled',
          <RadioButtonGroup
            name="radio-4"
            options={['Selected, Disabled']}
            isDisabled
            checkedIndex={0}
            onChange={() => {}}
          />
      ) }
    </div>
  </div>
);

const rootElement = document.getElementById('react-preview');
ReactDOM.render(<RadioButtonPreview />, rootElement);