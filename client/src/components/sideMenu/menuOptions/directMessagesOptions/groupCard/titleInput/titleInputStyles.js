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
    top: '2px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    cursor: 'pointer',
    transition: 'right .35s',
  }),
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: '.8rem',
  },
  successIcon: {
    extend: 'icon',
    color: theme.success.darker,
  },
  cancelIcon: {
    extend: 'icon',
    color: theme.red.main,
  },
  disabledIcon: {
    extend: 'icon',
    display: 'none',
  },
  bottomBorder: (props) => ({
    position: 'absolute',
    bottom: '12px',
    width: props.inputIsFocused ? '100%' : '0',
    height: '2px',
    backgroundColor: theme.mainBG.main,
    transition: 'width .35s',
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
