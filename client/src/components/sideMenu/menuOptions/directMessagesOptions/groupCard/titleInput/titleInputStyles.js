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
    paddingLeft: '5px',
    borderRadius: '5px',
    transition: 'width .25s',
    backgroundColor: 'yellow',
    border: 'none',
    '&:active, &:focus': {
      outline: `2px solid ${theme.blue.main}`,
    },
  }),
  icon: {
    position: 'absolute',
    right: '5px',
    top: '5px',
    color: theme.success.main,
    cursor: 'pointer',
  },
}));
