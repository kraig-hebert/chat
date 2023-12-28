import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './panelStyles';

const Panel = (props) => {
  const { children, title } = props;
  const classes = useStyles(props);
  return (
    <div className={classes.panel}>
      {children}
      {title && <div className={classes.titleBar}>{title}</div>}
    </div>
  );
};

Panel.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
};

export default Panel;
