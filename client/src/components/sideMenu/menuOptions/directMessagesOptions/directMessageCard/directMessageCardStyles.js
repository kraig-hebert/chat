import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  directMessageCard: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',
    height: '50px',
    backgroundColor: theme.tertiary.main,
    borderRadius: '5px',
  },
  icon: {
    color: theme.mainBG.main,
    fontSize: '2.75rem',
  },
}));
