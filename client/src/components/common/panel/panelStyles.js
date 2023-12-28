import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  panel: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.blue.main,
    borderRadius: '5px',
    padding: '3px',
    width: '100%',
    marginBottom: '5px',
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
    borderTopLeftRadius: '3px',
    borderBottomLeftRadius: '3px',
    borderTopRightRadius: '5px',
    fontSize: '.85rem',
  },
}));
