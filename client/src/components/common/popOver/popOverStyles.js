import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  popOverContainer: (props) => ({
    position: 'absolute',
    left: '105%',
    boxShadow: `0px 0px 10px ${theme.dark.main}`,
  }),
  popOver: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '8px',
    borderRadius: '2px',
    backgroundColor: theme.light.main,
  },
  closeIcon: {
    position: 'absolute',
    top: '-20px',
    right: '5px',
    color: theme.light.main,
    cursor: 'pointer',
  },
}));
