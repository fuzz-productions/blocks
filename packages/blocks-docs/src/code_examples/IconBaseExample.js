import React from "react"

const { AddIcon,
        CloseIcon,
        MoreIcon,
        MoreVerticalIcon} = require('blocks-react').Icons;
const { Colors } = require('blocks-react');

const IconBaseExamples = () => (
  <div>
    <AddIcon />
    <CloseIcon fill={Colors.Focus} />
    <MoreIcon fill={Colors.Dark01} />
    <MoreVerticalIcon fill={Colors.Warning} />
  </div>
);

export default IconBaseExamples;
