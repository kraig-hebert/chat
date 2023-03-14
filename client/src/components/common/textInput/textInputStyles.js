import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  textInputContainer: (props) => ({
    position: 'relative',
    width: props.width,
  }),
  textInput: (props) => ({
    width: '100%',
    height: props.height,
    paddingLeft: '30px',
    backgroundColor: props.backgroundColor,
    caretColor: props.textColor,
    color: props.textColor,
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
  inputPlaceholder: (props) => ({
    transition: '.2s',
    position: 'absolute',
    left: '30px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: props.textColor,
    fontSize: '.9rem',
    pointerEvents: 'none',
  }),
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
  clearIcon: {
    position: 'absolute',
    right: '5px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: theme.light.main,
    fontSize: '1rem',
    cursor: 'pointer',
  },
}));
