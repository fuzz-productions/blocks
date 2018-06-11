const React = require('react');
const PropTypes = require('prop-types');

const Button = require('./Button.jsx');


const ButtonPrimary = props => (
  <Button
    {...props}
    classes="button small secondary"
  />
);

ButtonPrimary.propTypes = {
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func
};

ButtonPrimary.defaultProps = {
  text: '',
  isDisabled: false,
  onClick: () => {}
};

module.exports = ButtonPrimary;

