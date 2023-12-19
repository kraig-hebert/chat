import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  messages: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '500px',
    height: '300px',
    backgroundColor: theme.secondary.main,
    borderRadius: '5px',
  },
}));
