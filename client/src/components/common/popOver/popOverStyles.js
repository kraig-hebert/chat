import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  popOverContainer: (props) => ({}),
  right: (props) => ({
    display: props.showPopOver ? 'block' : 'none',
    position: 'absolute',
    top: '0',
    right: '105%',
    boxShadow: `0px 0px 10px ${theme.dark.main}`,
    zIndex: '2',
  }),
  left: (props) => ({
    display: props.showPopOver ? 'block' : 'none',
    position: 'absolute',
    top: '0',
    left: '105%',
    boxShadow: `0px 0px 10px ${theme.dark.main}`,
    zIndex: '2',
  }),
  popOver: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '3px',
    backgroundColor: theme.light.main,
  },
}));
