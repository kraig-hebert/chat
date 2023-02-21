import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  menuSearchInput: {
    position: 'relative',
    width: '80%',
  },
  inputPlaceholder: {
    position: 'absolute',
    left: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: theme.light.main,
    fontSize: '.8rem',
    pointerEvents: 'none',
  },
  input: {
    width: '100%',
    height: '25px',
    backgroundColor: theme.mainBG.main,
    borderRadius: '5px',
    border: 'none',
    '&:active, &:focus': {
      outline: '2px solid ' + theme.blue.main,
    },
  },
}));
