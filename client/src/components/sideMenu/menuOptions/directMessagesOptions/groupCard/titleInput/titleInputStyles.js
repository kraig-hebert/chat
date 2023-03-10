import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  titleInput: (props) => ({
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    top: '50%',
    width: props.width,
    height: props.groupInfoHeight,
    backgroundColor: 'red',
    transition: 'width .25s',
  }),
});
