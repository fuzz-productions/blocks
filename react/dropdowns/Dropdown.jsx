const React = require('react');
const PropTypes = require('prop-types');

const DropdownItem = require('./DropdownItem.jsx');
const closeOnClick = require('../wrappers/closeOnClick.jsx');
const keyControlledMenu = require('../wrappers/keyControlledMenu.jsx');

const DropdownMenu = (props) => {
  let triggerContent = props.text;
  let triggerClassNames = 'blx-dropdown-trigger';

  if (props.isOpen) triggerClassNames += ' blx-active';
  if (props.isDisabled) triggerClassNames += ' blx-disabled';
  if (!props.isValid) triggerClassNames += ' blx-invalid';

  if (props.value) {
    for (let i = 0; i < props.options.length; i++) {
      const option = props.options[i];
      if (option.value === props.value) {
        triggerContent = option.text;
        break;
      }
    }
  }

  return (
    <div className="blx-dropdown-wrapper" ref={props.forwardedRef}>
      <div className="blx-dropdown">

        {/* DESCRIPTION */}
        { props.description &&
            <div>
              <label className="blx-ui-text">{props.description}</label>
            </div>
        }

        {/* TRIGGER */}
        <button
          className={triggerClassNames}
          disabled={props.isDisabled}
          onClick={props.toggle}
          title={triggerContent}
          autoFocus={props.autoFocus}
          onKeyDown={props.onKeyDown}
          onFocus={props.onTriggerFocus}
        >
          { props.icon && <span className={`blx-icon blx-icon-${props.icon}`} /> }
          <span className={props.value ? 'blx-dropdown-text' : 'blx-dropdown-placeholder'}>
            { triggerContent }
          </span>
        </button>

        {/* DROPDOWN MENU */}
        <div className={`blx-dropdown-menu ${props.isOpen ? '' : 'blx-hidden'}`}>
          <ul className="blx-dropdown-list">
            {
              props.options.map((option, idx) => (
                <DropdownItem
                  key={option.text || option.key}
                  option={option}
                  ref={props.optionsRefs[idx]}
                  onKeyDown={props.onKeyDown}
                  onKeyUp={props.onKeyUp}
                  onSelect={props.onSelect}
                />
              ))
            }
          </ul>
        </div>

        {/* INVALID MESSAGE */}
        { !props.isValid && !props.isOpen && <span className="blx-invalid-input-message">{props.invalidErrorMessage}</span> }
      </div>
    </div>
  );
};

DropdownMenu.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
  text: PropTypes.string,
  icon: PropTypes.string,
  description: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  options: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    disabled: PropTypes.bool,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    href: PropTypes.string,
    element: PropTypes.node,
    key: PropTypes.string
  })),
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func,
  autoFocus: PropTypes.bool,
  isValid: PropTypes.bool,
  forwardedRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired
};

DropdownMenu.defaultProps = {
  isOpen: false,
  options: [],
  text: 'Choose an option',
  icon: null,
  description: '',
  value: null,
  onChange: () => {},
  autoFocus: false,
  isValid: true
};


module.exports = closeOnClick(keyControlledMenu(DropdownMenu));
