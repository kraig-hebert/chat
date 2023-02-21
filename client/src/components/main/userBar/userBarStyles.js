import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  userBar: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '50px',
    borderRadius: '15px',
    border: `2px solid ${theme.light.main}`,
    backgroundColor: theme.secondary.main,
  },
}));
