import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  titleInputContainer: (props) => ({
    position: 'absolute',
    left: '0',
    top: '50%',
    transform: 'translateY(-50%)',
    transition: 'width .25s',
  }),
  titleInput: (props) => ({
    width: '125px',
    height: props.groupInfoHeight,
    borderRadius: '5px',
    transition: 'width .25s',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'text',
    color: theme.mainBG.main,
    caretColor: theme.light.main,
    fontSize: '1rem',
    fontWeight: '700',
    pointerEvents: props.inputIsFocused ? 'all' : 'none',
    '&:active, &:focus': {
      outline: 'none',
    },
  }),
  icon: {
    position: 'absolute',
    right: '5px',
    top: '5px',
    color: theme.success.main,
    cursor: 'pointer',
  },
  bottomBorder: (props) => ({
    position: 'absolute',
    bottom: '10px',
    width: props.inputIsFocused ? '100%' : '0',
    height: '2px',
    backgroundColor: theme.mainBG.main,
    transition: 'width .25s',
  }),
}));
