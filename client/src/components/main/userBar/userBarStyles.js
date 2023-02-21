import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  userBar: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '50px',
    borderRadius: '5px',
    border: `1px solid ${theme.tertiary.main}`,
    backgroundColor: theme.secondary.main,
  },
}));
