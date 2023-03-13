import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  titleInputContainer: (props) => ({
    position: 'relative',
    overflow: 'hidden',
  }),
  titleInput: (props) => ({
    width: '125px',
    height: props.groupInfoHeight,
    borderRadius: '5px',
    transition: 'width .25s',
    border: 'none',
    cursor: 'text',
    color: theme.mainBG.main,
    caretColor: theme.light.main,
    backgroundColor: 'transparent',
    fontSize: '1rem',
    fontWeight: '700',
    pointerEvents: props.inputIsFocused ? 'auto' : 'none',
    '&:active, &:focus': {
      outline: 'none',
    },
  }),
  iconsContainer: (props) => ({
    position: 'absolute',
    right: props.inputIsFocused ? '5px' : '-50px',
    top: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    cursor: 'pointer',
    transition: 'right .25s',
  }),
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  successIcon: {
    color: theme.success.darker,
  },
  cancelIcon: {
    color: theme.red.main,
  },
  bottomBorder: (props) => ({
    position: 'absolute',
    bottom: '12px',
    width: props.inputIsFocused ? '100%' : '0',
    height: '2px',
    backgroundColor: theme.mainBG.main,
    transition: 'width .25s',
    '& p': {
      position: 'absolute',
      right: '5px',
      top: '2px',
      fontSize: '.6rem',
      color: theme.light.main,
      cursor: 'pointer',
    },
  }),
}));
