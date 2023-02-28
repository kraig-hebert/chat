import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  textInputContainer: {
    position: 'relative',
  },
  textInput: (props) => ({
    width: props.width,
    height: props.height,
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
  }),
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
  icon: {
    position: 'absolute',
    left: '5px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: theme.light.main,
    fontSize: '1.25rem',
    pointerEvents: 'none',
  },
  focusedIcon: {
    extend: 'icon',
    color: theme.blue.main,
  },
}));
