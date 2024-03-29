const React = require('react');
const PropTypes = require('prop-types');
const classnames = require('classnames');
const ReactLink = require('react-router-dom').Link;


class DropdownItem extends React.Component {
  constructor(props) {
    super(props);

    this.onSelect = this.onClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  onClick(e) {
    e.stopPropagation();
    this.props.onSelect(e, this.props.option);
  }

  onKeyDown(e) {
    this.props.onKeyDown(e, this.props.option);
  }

  onKeyUp(e) {
    this.props.onKeyUp(e, this.props.option);
  }

  getLinkItem() {
    if (this.props.option.useReactLink) {
      return (
        <ReactLink
          to={this.props.option.href}
          disabled={this.props.option.disabled}
          onKeyDown={this.onKeyDown}
          onKeyUp={this.onKeyUp}
          onClick={this.onSelect}
        >
          {this.props.option.text || this.props.option.element}
        </ReactLink>
      );
    }

    return (
      <a
        href={this.props.option.href}
        target={this.props.option.newTab ? '_blank' : null}
        disabled={this.props.option.disabled}
        title={this.props.option.text}
        onKeyDown={this.onKeyDown}
        onKeyUp={this.onKeyUp}
        onClick={this.onSelect}
      >
        {this.props.option.text || this.props.option.element}
      </a>
    );
  }

  getButtonItem() {
    return (
      <button
        disabled={this.props.option.disabled}
        title={this.props.option.text}
        onKeyDown={this.onKeyDown}
        onKeyUp={this.onKeyUp}
        onClick={this.onSelect}
      >
        {this.props.option.text || this.props.option.element}
      </button>
    );
  }

  render() {
    let item = null;
    if (this.props.option.href) {
      item = this.getLinkItem();
    } else {
      item = this.getButtonItem();
    }

    const classes = classnames('blx-dropdown-item', this.props.className, {
      'blx-disabled': this.props.option.disabled,
      'blx-selected': this.props.isSelected
    })

    return (
      <li
        style={this.props.style}
        className={classes}
        ref={this.props.forwardedRef}
      >
        {item}
      </li>
    );
  }
}

DropdownItem.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  option: PropTypes.shape({
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
    key: PropTypes.string,
    useReactLink: PropTypes.bool,
  }).isRequired,
  isSelected: PropTypes.bool,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  onSelect: PropTypes.func
};

DropdownItem.defaultProps = {
  className: '',
  style: null,
  isSelected: false,
  onKeyDown: () => {},
  onKeyUp: () => {},
  onSelect: () => {}
};

module.exports = React.forwardRef((props, ref) => (
  <DropdownItem {...props} forwardedRef={ref} />
));
