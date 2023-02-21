import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  menuIcon: {
    color: theme.mainBG.main,
    fontSize: '2rem',
    cursor: 'pointer',
  },
}));
