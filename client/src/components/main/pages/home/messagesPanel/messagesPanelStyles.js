import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  messages: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '300px',
    backgroundColor: theme.secondary.main,
    borderRadius: '5px',
  },
  divider: {
    display: 'block',
    width: '3px',
    height: '100%',
    backgroundColor: theme.blue.main,
  },
}));
