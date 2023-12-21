import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  homePanel: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.blue.main,
    borderRadius: '5px',
    padding: '3px',
    margin: '0 5px',
    width: '100%',
    // filter: `drop-shadow(0 0 2px ${theme.secondary.main})`,
  },
  titleBar: {
    position: 'absolute',
    right: '0',
    top: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.blue.main,
    padding: '5px',
    borderRadius: '3px',
    fontSize: '.85rem',
  },
}));
