import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  homePanel: (props) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.blue.main,
    borderRadius: '5px',
    padding: '3px',
    // filter: `drop-shadow(0 0 2px ${theme.secondary.main})`,
  }),
}));
