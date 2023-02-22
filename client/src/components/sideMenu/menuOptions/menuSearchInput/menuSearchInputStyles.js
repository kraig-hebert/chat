import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  menuSearchInput: {
    position: 'relative',
    width: '80%',
  },
  searchIcon: {
    position: 'absolute',
    left: '5px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: theme.light.main,
    fontSize: '1.25rem',
    pointerEvents: 'none',
  },
  activeSearchIcon: {
    extend: 'searchIcon',
    color: theme.blue.main,
  },
  inputPlaceholder: {
    transition: '.2s',
    position: 'absolute',
    left: '30px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: theme.light.halfAlpha,
    fontSize: '.9rem',
    pointerEvents: 'none',
  },
  input: {
    width: '100%',
    height: '30px',
    paddingLeft: '30px',
    backgroundColor: theme.mainBG.main,
    caretColor: theme.light.main,
    color: theme.light.main,
    borderRadius: '5px',
    border: 'none',
    '&:active, &:focus': {
      outline: '2px solid ' + theme.blue.main,
      '& + span': {
        left: '50px',
        color: theme.light.transparant,
      },
    },
  },
}));
