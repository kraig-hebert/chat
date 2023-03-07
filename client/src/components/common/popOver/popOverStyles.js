import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  popOverContainer: {
    position: 'absolute',
    left: '105%',
    boxShadow: `0px 0px 10px ${theme.dark.main}`,
  },
  popOver: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '3px',
    backgroundColor: theme.light.main,
  },
  closeIcon: {
    position: 'absolute',
    top: '-20px',
    right: '5px',
    color: theme.light.main,
    cursor: 'pointer',
    fontSize: '1.15rem',
  },
}));
