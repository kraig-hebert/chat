import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  home: (props) => ({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: props.height,
  }),
});
