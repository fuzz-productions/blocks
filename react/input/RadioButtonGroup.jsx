const React = require('react');
const PropTypes = require('prop-types');

const RadioButton = require('./RadioButton.jsx');


const RadioButtonGroup = (props) => {
  const name = Math.random().toString();
  return (
    <div>
      {
        props.options.map((option, idx) => (
          <RadioButton
            key={option}
            name={name}
            text={option}
            value={option}
            isDisabled={props.isDisabled}
            onChange={props.onChange}
            isChecked={idx === props.checkedIndex}
          />
        ))
      }
    </div>
  );
};

RadioButtonGroup.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  isDisabled: PropTypes.bool,
  checkedIndex: PropTypes.number,
  onChange: PropTypes.func
};

RadioButtonGroup.defaultProps = {
  options: [],
  isDisabled: false,
  checkedIndex: -1,
  onChange: () => {}
};

module.exports = RadioButtonGroup;

