import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  messages: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '300px',
    backgroundColor: theme.secondary.main,
    borderRadius: '5px',
  },
}));
