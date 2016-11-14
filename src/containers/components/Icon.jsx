import React, { PropTypes } from 'react';

import styles from 'fontello/fontello.css';

/*
@:Usage
* <Icon name="icon-heart"/>
*/
const Icon = (props) => {
  const iconStyle = [
    styles.icon,
    styles[props.name],
    props.className
  ].join(" ");
  return (
    <i className={iconStyle}></i>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Icon;
