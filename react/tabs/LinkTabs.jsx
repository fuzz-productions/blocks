const React = require('react');
const PropTypes = require('prop-types');


const LinkTabs = props => (
  <ul className={`${props.isVertical ? 'vertical-tabs' : 'horizontal-tabs'} ${props.isDisabled ? 'disabled' : ''}`}>
    {
      props.tabs.map((tab, idx) => (
        <li
          key={Math.random()}
        >
          <a
            className={`tab-item ${idx === props.activeTabIdx ? 'active' : 'inactive'}`}
            href={tab.href}
          >
            {tab.name}
          </a>
        </li>
      ))
    }
  </ul>
);

LinkTabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    href: PropTypes.string
  })).isRequired,
  activeTabIdx: PropTypes.number,
  isDisabled: PropTypes.bool,
  isVertical: PropTypes.bool
};

LinkTabs.defaultProps = {
  activeTabIdx: 0,
  isDisabled: false,
  isVertical: false
};

module.exports = LinkTabs;
