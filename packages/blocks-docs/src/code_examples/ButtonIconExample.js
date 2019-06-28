import React from "react"

const { ButtonPrimary, ButtonSecondary, ButtonDanger, ButtonDark } = require('blocks-react').Buttons;
const { UpIcon, MoreIcon, SuccessIcon, CloseIcon, AddIcon, BackIcon, NextIcon, DownIcon } = require('blocks-react').Icons;
const { Colors } = require('blocks-base');

const ButtonIconExample = () => (
  <div className="blx-h-button-group">
    <ButtonPrimary
      onClick={() => {}}
      icon={<SuccessIcon />}
    />
    <ButtonSecondary
      onClick={() => {}}
      icon={<MoreIcon />}
    />
    <ButtonDanger
      onClick={() => {}}
      icon={<UpIcon />}
    />
    <ButtonDark
      onClick={() => {}}
      icon={<CloseIcon fill={Colors.SECONDARY_00} />}
    />
    <ButtonPrimary
      isDisabled
      onClick={() => {}}
      icon={<AddIcon />}
    />
    <ButtonSecondary
      isDisabled
      onClick={() => {}}
      icon={<BackIcon />}
    />
    <ButtonDanger
      isDisabled
      onClick={() => {}}
      icon={<NextIcon />}
    />
    <ButtonDark
      isDisabled
      onClick={() => {}}
      icon={<DownIcon fill={Colors.SECONDARY_00} />}
    />
  </div>
);

export default ButtonIconExample;
