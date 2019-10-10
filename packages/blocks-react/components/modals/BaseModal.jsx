const React = require('react');
const PropTypes = require('prop-types');
const CloseIcon = require('../icons/CloseIcon.jsx');
const classnames = require('classnames');

const BaseModal = (props) => {
  if (isHidden) return null;

  return (
    <React.Fragment>
      <div
        className={classnames('blx-modal-overlay', props.overlayClassName)}
        onClick={onClose}
      />
      <div className={classnames('blx-modal', props.className)} style={props.style}>
        {
          props.isClosable && (
            <button className={lassnames('blx-modal-close', props.closeClassName)} aria-label="close" onClick={props.onClose}>
              <CloseIcon />
            </button>
          )
        }
        {props.children}
      </div>
    </React.Fragment>
  );
};

BaseModal.propTypes = {
  className: PropTypes.string,
  closeClassName: PropTypes.string,
  overlayClassName: PropTypes.string,
  style: PropTypes.object,
  isHidden: PropTypes.bool,
  isClosable: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node
};

BaseModal.defaultProps = {
  className: '',
  closeClassName: '',
  overlayClassName: '',
  style: null,
  isHidden: true,
  isClosable: true,
  onClose: () => {},
  children: null
};

module.exports = BaseModal;
