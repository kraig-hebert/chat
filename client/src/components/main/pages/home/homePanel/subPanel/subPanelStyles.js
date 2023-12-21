import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  subPanel: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '50%',
    height: '100%',
    padding: '5px',
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
    fontSize: '.85rem',
  },
}));
