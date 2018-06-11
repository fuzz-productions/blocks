const React = require('react');
const PropTypes = require('prop-types');

const BaseModal = require('./BaseModal.jsx');
const ButtonPrimary = require('../buttons/ButtonPrimary.jsx');
const ButtonSecondary = require('../buttons/ButtonSecondary.jsx');


const ActionModal = (props) => {
  let confirmButton = null;
  if (props.onConfirm && props.confirmText) {
    confirmButton = (
      <ButtonPrimary
        text={props.confirmText}
        onClick={props.onConfirm}
      />
    );
  }

  let cancelButton = null;
  if (props.onCancel && props.cancelText) {
    cancelButton = (
      <ButtonSecondary
        text={props.cancelText}
        onClick={props.onCancel}
      />
    );
  }

  let buttonBar = null;
  if (confirmButton || cancelButton) {
    buttonBar = (
      <div className="modal-buttons">
        {cancelButton}
        {confirmButton}
      </div>
    );
  }

  let actionInfo = null;
  if (props.actionInfo) {
    actionInfo = (
      <p className="text-emph">{props.actionInfo}</p>
    );
  }

  let modalContent = null;
  if (!props.isHidden) {
    modalContent = (
      <div>
        <span className="heading-medium">{props.title}</span>
        <p>{props.message}</p>
        {actionInfo}
        {buttonBar}
      </div>
    );
  }

  return (
    <BaseModal
      isHidden={props.isHidden}
      onClose={props.onClose}
    >
      { modalContent }
    </BaseModal>
  );
};

ActionModal.propTypes = {
  isHidden: PropTypes.bool,
  title: PropTypes.string,
  message: PropTypes.string,
  actionInfo: PropTypes.string,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  onClose: PropTypes.func
};

ActionModal.defaultProps = {
  isHidden: true,
  title: '',
  message: '',
  actionInfo: '',
  confirmText: '',
  cancelText: '',
  onConfirm: null,
  onCancel: null,
  onClose: () => {}
};

module.exports = ActionModal;